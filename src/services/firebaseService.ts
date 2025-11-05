import { doc, getDoc, setDoc, collection, addDoc, getDocs, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { AppData, Message } from '../data/types';
import { initialData } from '../data/initialData';

const DESA_DATA_DOC = 'desa-config';
const MESSAGES_COLLECTION = 'messages';

/**
 * Load desa data from Firestore
 */
export const loadDesaData = async (): Promise<AppData> => {
  try {
    const docRef = doc(db, 'config', DESA_DATA_DOC);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data() as AppData;
      
      // Migration: ensure informasiUmum exists
      if (!data.informasiUmum) {
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
      // No data exists, save initial data
      await saveDesaData(initialData);
      return initialData;
    }
  } catch (error) {
    console.error('Error loading desa data:', error);
    throw error;
  }
};

/**
 * Save desa data to Firestore
 */
export const saveDesaData = async (data: AppData): Promise<void> => {
  try {
    const docRef = doc(db, 'config', DESA_DATA_DOC);
    
    // Remove messages from main data (stored separately)
    const { messages, ...dataWithoutMessages } = data;
    
    await setDoc(docRef, {
      ...dataWithoutMessages,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error saving desa data:', error);
    throw error;
  }
};

/**
 * Load all messages from Firestore
 */
export const loadMessages = async (): Promise<Message[]> => {
  try {
    const messagesRef = collection(db, MESSAGES_COLLECTION);
    const snapshot = await getDocs(messagesRef);
    
    const messages: Message[] = [];
    snapshot.forEach((doc) => {
      messages.push({
        id: parseInt(doc.id),
        ...doc.data()
      } as Message);
    });
    
    // Sort by id descending (newest first)
    return messages.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.error('Error loading messages:', error);
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
    
    await setDoc(docRef, newMessage);
    return newMessage;
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};

/**
 * Delete a message from Firestore
 */
export const deleteMessage = async (messageId: number): Promise<void> => {
  try {
    const docRef = doc(db, MESSAGES_COLLECTION, messageId.toString());
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
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
      console.log('Initializing Firebase with default data...');
      await saveDesaData(initialData);
      console.log('Firebase initialized successfully!');
    }
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error;
  }
};