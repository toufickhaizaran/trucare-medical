import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import rzData from "./data/rz_all_products_combined.json" assert { type: "json" };

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDuFusmya5AseYjkNVoCsWaujRFEwwJ2IY",
  authDomain: "trucare-medical.firebaseapp.com",
  projectId: "trucare-medical",
  storageBucket: "trucare-medical.appspot.com",
  messagingSenderId: "164200039201",
  appId: "1:164200039201:web:565a7aec99380337157460",
  measurementId: "G-CP1W0RG7LC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadData() {
  try {
    const collectionRef = collection(db, "rz_products");

    for (const item of rzData) {
      await addDoc(collectionRef, item);
    }

    console.log("✅ All RZ products uploaded successfully.");
  } catch (error) {
    console.error("❌ Error uploading RZ products:", error);
  }
}

uploadData();
