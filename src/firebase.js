import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider as FirebaseGoogleAuthProvider, getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYqvtINtGJvc2mayGvNI5bSPOlE03DgJM",
  authDomain: "bloodbank-44825.firebaseapp.com",
  projectId: "bloodbank-44825",
  storageBucket: "bloodbank-44825.appspot.com",
  messagingSenderId: "378412930204",
  appId: "1:378412930204:web:e23d81b824b91460b04959",
  measurementId: "G-Z3ZR599FVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create an instance of GoogleAuthProvider
const googleAuthProvider = new FirebaseGoogleAuthProvider(); // Instance creation

// Export app, auth, and googleAuthProvider
export { app, auth, googleAuthProvider };
