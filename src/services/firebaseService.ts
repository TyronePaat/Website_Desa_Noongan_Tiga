import { doc, getDoc, setDoc, collection, addDoc, getDocs, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { AppData, Message } from '../data/types';
import { initialData } from '../data/initialData';

const DESA_DATA_DOC = 'desa-config';
const MESSAGES_COLLECTION = 'messages';

/**
 * Sanitize data before saving to Firestore
 * Removes undefined values and ensures data size is within limits
 */
const sanitizeDataForFirestore = (data: any): any => {
  if (data === null || data === undefined) {
    return null;
  }
  
  if (data instanceof Date) {
    return Timestamp.fromDate(data);
  }
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeDataForFirestore(item));
  }
  
  if (typeof data === 'object') {
    const sanitized: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (value !== undefined) {
          sanitized[key] = sanitizeDataForFirestore(value);
        }
      }
    }
    return sanitized;
  }
  
  return data;
};

/**
 * Check if data size is within Firestore limits
 */
const checkDataSize = (data: any): { isValid: boolean; size: number; maxSize: number } => {
  const jsonString = JSON.stringify(data);
  const sizeInBytes = new Blob([jsonString]).size;
  const maxSize = 1048576; // 1MB in bytes
  
  return {
    isValid: sizeInBytes < maxSize,
    size: sizeInBytes,
    maxSize: maxSize
  };
};

/**
 * Load desa data from Firestore
 */
export const loadDesaData = async (): Promise<AppData> => {
  try {
    console.log('📥 Loading data from Firestore...');
    const docRef = doc(db, 'config', DESA_DATA_DOC);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data() as AppData;
      console.log('✅ Data loaded successfully from Firestore');
      
      // Migration: ensure informasiUmum exists
      if (!data.informasiUmum) {
        console.log('🔄 Migrating data structure...');
        const migratedData = {
          ...initialData,
          ...data,
          informasiUmum: initialData.informasiUmum
        };
        await saveDesaData(migratedData);
        return migratedData;
      }
      
      return data;
    } else {
      console.log('📝 No existing data, initializing with default data...');
      await saveDesaData(initialData);
      return initialData;
    }
  } catch (error) {
    console.error('❌ Error loading desa data:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('permission')) {
        throw new Error('Tidak memiliki izin untuk membaca data. Periksa Firebase Rules.');
      } else if (error.message.includes('network')) {
        throw new Error('Masalah koneksi jaringan. Periksa koneksi internet Anda.');
      }
    }
    
    throw error;
  }
};

/**
 * Save desa data to Firestore with improved error handling
 */
export const saveDesaData = async (data: AppData): Promise<void> => {
  try {
    console.log('🔍 Preparing data for Firestore...');
    
    // Remove messages from main data (stored separately)
    const { messages, ...dataWithoutMessages } = data;
    
    // Sanitize data
    const sanitizedData = sanitizeDataForFirestore(dataWithoutMessages);
    
    // Check data size
    const sizeCheck = checkDataSize(sanitizedData);
    if (!sizeCheck.isValid) {
      const sizeInKB = Math.round(sizeCheck.size / 1024);
      const maxSizeInKB = Math.round(sizeCheck.maxSize / 1024);
      throw new Error(
        `Data terlalu besar untuk disimpan (${sizeInKB}KB / ${maxSizeInKB}KB max). ` +
        `Kurangi jumlah data atau gunakan URL eksternal untuk gambar.`
      );
    }
    
    console.log(`📊 Data size: ${Math.round(sizeCheck.size / 1024)}KB`);
    
    const docRef = doc(db, 'config', DESA_DATA_DOC);
    
    // Add timestamp
    const dataToSave = {
      ...sanitizedData,
      updatedAt: Timestamp.now() // Using Timestamp.now() instead of serverTimestamp()
    };
    
    console.log('💾 Saving to Firestore...');
    await setDoc(docRef, dataToSave);
    console.log('✅ Data saved successfully to Firestore!');
    
  } catch (error) {
    console.error('❌ Error saving desa data:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('permission')) {
        throw new Error('Tidak memiliki izin untuk menyimpan data. Periksa Firebase Rules.');
      } else if (error.message.includes('network')) {
        throw new Error('Masalah koneksi jaringan. Periksa koneksi internet Anda.');
      } else if (error.message.includes('quota')) {
        throw new Error('Kuota Firebase terlampaui. Hubungi administrator.');
      }
      // Re-throw error dengan message asli jika sudah custom
      throw error;
    }
    
    throw new Error('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
  }
};

/**
 * Load all messages from Firestore
 */
export const loadMessages = async (): Promise<Message[]> => {
  try {
    console.log('📥 Loading messages from Firestore...');
    const messagesRef = collection(db, MESSAGES_COLLECTION);
    const snapshot = await getDocs(messagesRef);
    
    const messages: Message[] = [];
    snapshot.forEach((doc) => {
      messages.push({
        id: parseInt(doc.id),
        ...doc.data()
      } as Message);
    });
    
    console.log(`✅ Loaded ${messages.length} messages`);
    
    // Sort by id descending (newest first)
    return messages.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.error('❌ Error loading messages:', error);
    return [];
  }
};

/**
 * Save a new message to Firestore
 */
export const saveMessage = async (message: Omit<Message, 'id'>): Promise<Message> => {
  try {
    const id = Date.now();
    const docRef = doc(db, MESSAGES_COLLECTION, id.toString());
    
    const newMessage: Message = {
      id,
      ...message
    };
    
    const sanitizedMessage = sanitizeDataForFirestore(newMessage);
    
    console.log('💬 Saving new message...');
    await setDoc(docRef, sanitizedMessage);
    console.log('✅ Message saved successfully');
    
    return newMessage;
  } catch (error) {
    console.error('❌ Error saving message:', error);
    throw new Error('Gagal mengirim pesan. Silakan coba lagi.');
  }
};

/**
 * Delete a message from Firestore
 */
export const deleteMessage = async (messageId: number): Promise<void> => {
  try {
    console.log(`🗑️ Deleting message ${messageId}...`);
    const docRef = doc(db, MESSAGES_COLLECTION, messageId.toString());
    await deleteDoc(docRef);
    console.log('✅ Message deleted successfully');
  } catch (error) {
    console.error('❌ Error deleting message:', error);
    throw new Error('Gagal menghapus pesan. Silakan coba lagi.');
  }
};

/**
 * Initialize Firebase with initial data (one-time setup)
 */
export const initializeFirebaseData = async (): Promise<void> => {
  try {
    const docRef = doc(db, 'config', DESA_DATA_DOC);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      console.log('🚀 Initializing Firebase with default data...');
      await saveDesaData(initialData);
      console.log('✅ Firebase initialized successfully!');
    } else {
      console.log('✅ Firebase already initialized');
    }
  } catch (error) {
    console.error('❌ Error initializing Firebase:', error);
    throw error;
  }
};

/**
 * Test Firebase connection
 */
export const testFirebaseConnection = async (): Promise<boolean> => {
  try {
    console.log('🔌 Testing Firebase connection...');
    const testDoc = doc(db, 'config', 'test-connection');
    await setDoc(testDoc, { 
      test: true, 
      timestamp: Timestamp.now() 
    });
    await deleteDoc(testDoc);
    console.log('✅ Firebase connection successful');
    return true;
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    return false;
  }
};