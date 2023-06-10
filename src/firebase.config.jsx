import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyApbBrOWeG50Of2JLiu3XmBBUWCjp_b0oE",
    authDomain: "maltimart-5487d.firebaseapp.com",
    projectId: "maltimart-5487d",
    storageBucket: "maltimart-5487d.appspot.com",
    messagingSenderId: "824020331188",
    appId: "1:824020331188:web:0f7ab65ec4a28231ca05e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;