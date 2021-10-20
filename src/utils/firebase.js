import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update, remove, get, child } from "firebase/database";


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

class FirebaseDb { 

    get (location, callback) {
        const db = getDatabase();
        const dbRef = ref(db, location);
        
        onValue(dbRef, callback);
    }
    


}

export default FirebaseDb;
