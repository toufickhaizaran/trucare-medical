import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import GeotekData from "./data/geotek_all_products_expanded.json";

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
const db = getFirestore(app); // ✅ pass app into getFirestore

async function uploadData() {
  try {
    for (const item of GeotekData) {
      await addDoc(collection(db, "geotek-products"), item); // ✅ pass db to collection()
      console.log("✅ Uploaded:", item.name);
    }
    console.log("✅ All Geotek products uploaded successfully.");
  } catch (error) {
    console.error("❌ Error uploading:", error);
  }
}

uploadData();
