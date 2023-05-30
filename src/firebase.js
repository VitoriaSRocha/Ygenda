// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBqqtufM_OXtkU-oEkFh_rH_rTS683R-KA",
  authDomain: "ygenda2.firebaseapp.com",
  projectId: "ygenda2",
  storageBucket: "ygenda2.appspot.com",
  messagingSenderId: "59754551253",
  appId: "1:59754551253:web:2329088c88c6beb9bfcf5c",
  measurementId: "G-4Y8JTHX54K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};

export default app;