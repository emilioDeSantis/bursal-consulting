// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1s3gk605m9D9bdV6tbG6yxdPt5_L6L0U",
  authDomain: "bursal-consulting-f0196.firebaseapp.com",
  projectId: "bursal-consulting-f0196",
  storageBucket: "bursal-consulting-f0196.appspot.com",
  messagingSenderId: "1007022218582",
  appId: "1:1007022218582:web:028c0f1d2d901b6ca00af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;