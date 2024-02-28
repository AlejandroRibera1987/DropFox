// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQIMNr3w4KpUvbRPMTydziBL-sqlfJ7Lw",
  authDomain: "stockflow-adae7.firebaseapp.com",
  projectId: "stockflow-adae7",
  storageBucket: "stockflow-adae7.appspot.com",
  messagingSenderId: "319208728487",
  appId: "1:319208728487:web:acfba4ca3c044f32bcf882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

export const auth = getAuth (app)



