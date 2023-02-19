import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1OSfNzFwdq1tyKEQsZr-udDhHbBh2apk",
  authDomain: "ecommerce-firebase-41aab.firebaseapp.com",
  databaseURL: "https://ecommerce-firebase-41aab-default-rtdb.firebaseio.com",
  projectId: "ecommerce-firebase-41aab",
  storageBucket: "ecommerce-firebase-41aab.appspot.com",
  messagingSenderId: "575203681548",
  appId: "1:575203681548:web:4fda81391139adf6049529",
  measurementId: "G-Z98PYN8KBY",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
