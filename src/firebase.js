import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6etn3ynRVa-bRD4KFBhd6BjuVbDDHaG0",
  authDomain: "freewheelin-5ff80.firebaseapp.com",
  projectId: "freewheelin-5ff80",
  storageBucket: "freewheelin-5ff80.firebasestorage.app",
  messagingSenderId: "511685866642",
  appId: "1:511685866642:web:c7a47c9b28e5ed9977a24b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db, storage };
