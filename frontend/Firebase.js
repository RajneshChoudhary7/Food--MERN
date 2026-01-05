// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "khaana-a3dc5.firebaseapp.com",
  projectId: "khaana-a3dc5",
  storageBucket: "khaana-a3dc5.firebasestorage.app",
  messagingSenderId: "950394510860",
  appId: "1:950394510860:web:82ad1ec6830fb856d61829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export{app,auth}