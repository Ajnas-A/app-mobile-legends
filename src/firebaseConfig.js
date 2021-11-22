// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAPC4bvp30b8kHiXCxmUuFEQ0fJYIwlkPw",
    authDomain: "ml-database-378d1.firebaseapp.com",
    projectId: "ml-database-378d1",
    storageBucket: "ml-database-378d1.appspot.com",
    messagingSenderId: "406754209981",
    appId: "1:406754209981:web:ca6229c42aef1e3bbd47d4",
    measurementId: "G-10YGVY0JPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage();