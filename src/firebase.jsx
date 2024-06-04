// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbsG2Y8DGhidQBhSYWYLqv3KW6la5dO2Q",
  authDomain: "authentication-be203.firebaseapp.com",
  projectId: "authentication-be203",
  storageBucket: "authentication-be203.appspot.com",
  messagingSenderId: "548263852918",
  appId: "1:548263852918:web:f03cee02d8213fdb885857"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {auth}
