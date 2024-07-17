// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGK8oEUu8xZ_cTDk_ZbUX7nFhdBfhzCz4",
  authDomain: "todo-app-8c62c.firebaseapp.com",
  projectId: "todo-app-8c62c",
  storageBucket: "todo-app-8c62c.appspot.com",
  messagingSenderId: "989868001421",
  appId: "1:989868001421:web:ea381964d745243e1d3ac4",
  measurementId: "G-4D5HHMTKGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)