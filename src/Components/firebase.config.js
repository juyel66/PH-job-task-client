// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs7LCgseRAD58wH1rLMPOnSEbnmZ1cT6U",
  authDomain: "ph-job-task-15903.firebaseapp.com",
  projectId: "ph-job-task-15903",
  storageBucket: "ph-job-task-15903.appspot.com",
  messagingSenderId: "663110350491",
  appId: "1:663110350491:web:826e6d5b7bb96c6e8c783e",
  measurementId: "G-57WR18EHP7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default(auth);
