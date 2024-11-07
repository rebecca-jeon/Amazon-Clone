// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEx1azk6l7jsAmLlpN4Z2FnbVqHpX6Gq4",
    authDomain: "clone-f6caa.firebaseapp.com",
    projectId: "clone-f6caa",
    storageBucket: "clone-f6caa.appspot.com",
    messagingSenderId: "817590809378",
    appId: "1:817590809378:web:8826b00d97287b30606b7b",
    measurementId: "G-7Q0L54XYT2"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore();
  const auth = getAuth();

  export { db, auth };