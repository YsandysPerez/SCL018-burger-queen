import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpEd_PbKS3JlPTXPeUZtCTXzvYs0vyuaA",
  authDomain: "burger-queen-daa88.firebaseapp.com",
  projectId: "burger-queen-daa88",
  storageBucket: "burger-queen-daa88.appspot.com",
  messagingSenderId: "381619158390",
  appId: "1:381619158390:web:1c6695e52991071b8bce57",
  measurementId: "G-026T7LF1GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;