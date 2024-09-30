// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfky5IztVJ1j9pfft71NKZonzF0gb--DE",
  authDomain: "proplayer-rentals.firebaseapp.com",
  projectId: "proplayer-rentals",
  storageBucket: "proplayer-rentals.appspot.com",
  messagingSenderId: "893323875097",
  appId: "1:893323875097:web:c0325c294f1c1856642b88",
  measurementId: "G-5EEQYB5ZDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};