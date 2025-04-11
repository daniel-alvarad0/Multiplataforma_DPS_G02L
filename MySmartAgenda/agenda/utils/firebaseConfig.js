import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZq-yFhIShywBdxjp1xNWfoEpBEqyk8IA",
  authDomain: "noreply@mi-agenda-9550d.firebaseapp.com",
  projectId: "mi-agenda-9550d",
  storageBucket: "mi-agenda-9550d.firebasestorage.app",
  messagingSenderId: "651164095367",
  appId: "1:651164095367:android:fa4101a1445549db50f922"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Función para registrar un usuario
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};