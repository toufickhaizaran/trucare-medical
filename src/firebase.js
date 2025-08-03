// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuFusmya5AseYjkNVoCsWaujRFEwwJ2IY",
  authDomain: "trucare-medical.firebaseapp.com",
  projectId: "trucare-medical",
  storageBucket: "trucare-medical.firebasestorage.app",
  messagingSenderId: "164200039201",
  appId: "1:164200039201:web:565a7aec99380337157460",
  measurementId: "G-CP1W0RG7LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
