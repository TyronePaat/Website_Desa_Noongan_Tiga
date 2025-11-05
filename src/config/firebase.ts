import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
// IMPORTANT: Replace these with your actual Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyDvr01NT_3Kv8vX9mfw9JXwBnsqzPpU0rQ",
    authDomain: "noongantiga-c55e2.firebaseapp.com",
    projectId: "noongantiga-c55e2",
    storageBucket: "noongantiga-c55e2.firebasestorage.app",
    messagingSenderId: "34256784561",
    appId: "1:34256784561:web:164a83e5c0679a95572690",
    measurementId: "G-3CMR0FY76F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;