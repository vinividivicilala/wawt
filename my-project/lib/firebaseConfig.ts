// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Config kamu (samakan dengan yang dari HTML)
const firebaseConfig = {
  apiKey: "AIzaSyAzgMVdqZhrqQ3PqiSWapaCl6oglF3QP64",
  authDomain: "life-is-what-it-is-learn.firebaseapp.com",
  projectId: "life-is-what-it-is-learn",
  storageBucket: "life-is-what-it-is-learn.appspot.com",
  messagingSenderId: "755474876167",
  appId: "1:755474876167:web:205fb4ea8c7b8d5b66e7a2",
};

// Cegah init ulang kalau sudah ada app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
