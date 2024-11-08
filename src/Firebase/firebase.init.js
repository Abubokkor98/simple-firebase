// warning!! do not store config on the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuyFOPX8yCC-R_X0FJUaVhAk9WDl1mQL0",
  authDomain: "simple-firebase-d5afe.firebaseapp.com",
  projectId: "simple-firebase-d5afe",
  storageBucket: "simple-firebase-d5afe.firebasestorage.app",
  messagingSenderId: "516933659629",
  appId: "1:516933659629:web:a4dc1133d6a90e58f015e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;