import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD3cBwFM9NcoWhoftwDjUvYcgiS5WwT25E",
  authDomain: "rotex-bcdff.firebaseapp.com",
  projectId: "rotex-bcdff",
  storageBucket: "rotex-bcdff.firebasestorage.app",
  messagingSenderId: "755824945827",
  appId: "1:755824945827:web:64b0c5066ae98b4091ed16",
  measurementId: "G-D064R9Q8B8"
};
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);