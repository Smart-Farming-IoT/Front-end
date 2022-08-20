// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8lyk71roaVFvTQV9KV9Oh_6lBljbKB0",
  authDomain: "vue-auth-firebase-int.firebaseapp.com",
  projectId: "vue-auth-firebase-int",
  storageBucket: "vue-auth-firebase-int.appspot.com",
  messagingSenderId: "137195981692",
  appId: "1:137195981692:web:9e8abe2fd16869fbabf2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}