// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6sTJt-sJAfeQBQT8r6sEode6rlluoHaU",
  authDomain: "treinamento-serverless.firebaseapp.com",
  projectId: "treinamento-serverless",
  storageBucket: "treinamento-serverless.appspot.com",
  messagingSenderId: "929686008598",
  appId: "1:929686008598:web:55efa9c2a7df8d1c2f9637",
  measurementId: "G-G7Y2Z0GQQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);