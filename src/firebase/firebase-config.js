// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4BlfeMqLhjxOgz6SsCbZD18P2j-qQj-k",
  authDomain: "book-catalog-app-b2099.firebaseapp.com",
  projectId: "book-catalog-app-b2099",
  storageBucket: "book-catalog-app-b2099.appspot.com",
  messagingSenderId: "452535609431",
  appId: "1:452535609431:web:647270842adb54cf061b12",
  measurementId: "G-PJ2HN6TMSH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(firebaseApp);

export default firebaseDb;