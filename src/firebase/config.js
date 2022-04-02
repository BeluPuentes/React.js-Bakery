// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhUlYY2giYey4zprLSQe0LTHoc2vYi3-8",
  authDomain: "my-backery-react.firebaseapp.com",
  projectId: "my-backery-react",
  storageBucket: "my-backery-react.appspot.com",
  messagingSenderId: "833215270207",
  appId: "1:833215270207:web:113e8fd5f192e291ecd78a",
  measurementId: "G-FTWJF33EK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);