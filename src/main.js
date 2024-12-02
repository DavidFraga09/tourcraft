import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTFr51OqtzPaN5PFVRkBB_SKA8OF_12w",
  authDomain: "tourcraft-1f1a0.firebaseapp.com",
  projectId: "tourcraft-1f1a0",
  storageBucket: "tourcraft-1f1a0.firebasestorage.app",
  messagingSenderId: "468097134399",
  appId: "1:468097134399:web:1fbcbca7e0b402e9f62d8a",
  measurementId: "G-Q26MLFFLZL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.mount('#app')
