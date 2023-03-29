// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDc-888h0JRnZ69U8SUkMQ8RG0YrRNnc",
  authDomain: "teamblog-ceea9.firebaseapp.com",
  projectId: "teamblog-ceea9",
  storageBucket: "teamblog-ceea9.appspot.com",
  messagingSenderId: "501012772408",
  appId: "1:501012772408:web:f55047e9e58f5a7a3798cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const storage=getStorage(app)