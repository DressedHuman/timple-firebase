// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMbOnpgUTdWseXgr1wj1vyCBum-PmfPyU",
  authDomain: "timple-firebase-9cbf0.firebaseapp.com",
  projectId: "timple-firebase-9cbf0",
  storageBucket: "timple-firebase-9cbf0.appspot.com",
  messagingSenderId: "298465143568",
  appId: "1:298465143568:web:840a32847b37a63804d395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };