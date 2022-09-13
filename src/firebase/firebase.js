import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChwPOPSRqN28nyNoYgYehK8mcAr7dMRbA",
  authDomain: "friendsnet-a0f8e.firebaseapp.com",
  projectId: "friendsnet-a0f8e",
  storageBucket: "friendsnet-a0f8e.appspot.com",
  messagingSenderId: "498394595973",
  appId: "1:498394595973:web:68a8f96001185355aa5fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)