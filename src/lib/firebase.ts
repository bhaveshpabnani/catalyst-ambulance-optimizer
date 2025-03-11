
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_s2RUAVzV4qIcgPDer4jU4fx6qIjmqWQ",
  authDomain: "localhost",
  projectId: "catalyyst-62c65",
  storageBucket: "catalyyst-62c65.firebasestorage.app",
  messagingSenderId: "818115160308",
  appId: "1:818115160308:web:205674ba52bfb1590e56a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);