// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzbZPzf9OlreAfVKs-9a0Hs7LPU7TlUec",
  authDomain: "doctors-portal-8845a.firebaseapp.com",
  projectId: "doctors-portal-8845a",
  storageBucket: "doctors-portal-8845a.appspot.com",
  messagingSenderId: "157878363194",
  appId: "1:157878363194:web:03d025338f06681d468103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;