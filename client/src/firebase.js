// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-auth-8fae9.firebaseapp.com',
  projectId: 'mern-auth-8fae9',
  storageBucket: 'mern-auth-8fae9.appspot.com',
  messagingSenderId: '119956434246',
  appId: '1:119956434246:web:5c3b8032155cb8a0040947',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
