// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf7jI5e0IlyHoXP2dV6WPjSXQv4hkKCA8",
  authDomain: "utipay-bd.firebaseapp.com",
  projectId: "utipay-bd",
  storageBucket: "utipay-bd.firebasestorage.app",
  messagingSenderId: "233749986945",
  appId: "1:233749986945:web:de5ea784472f7ca9909780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);