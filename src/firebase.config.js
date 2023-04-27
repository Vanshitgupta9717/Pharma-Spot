import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3NRwB9eK4-njiy3yNbpG4XwZxFApElRg",
  authDomain: "medy-149d4.firebaseapp.com",
  databaseURL: "https://medy-149d4-default-rtdb.firebaseio.com",
  projectId: "medy-149d4",
  storageBucket: "medy-149d4.appspot.com",
  messagingSenderId: "78808220844",
  appId: "1:78808220844:web:40b90802d1ed4f6d920b09",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
