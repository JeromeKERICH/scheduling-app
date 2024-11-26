import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBYrBLEjYE3VO1oaaZLMwqvdloFb3RLRXo",
  authDomain: "scheduling-app-6963f.firebaseapp.com",
  projectId: "scheduling-app-6963f",
  storageBucket: "scheduling-app-6963f.firebasestorage.app",
  messagingSenderId: "930684943886",
  appId: "1:930684943886:web:b3764ee7e46518bb14065f",
  measurementId: "G-SYSXM4PEEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db, analytics }; 
