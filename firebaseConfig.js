// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCovKdtO76iVt-g9v3lIrom5XSrdfNjIPk",
    authDomain: "signin-dps.firebaseapp.com",
    projectId: "signin-dps",
    storageBucket: "signin-dps.appspot.com",
    messagingSenderId: "815470049308",
    appId: "1:815470049308:web:3c0bb93f272fa58c3947d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
