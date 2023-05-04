// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMuy4NrmJ_Ps_5YFvQzhRuLSNxjq0Q-bA",
  authDomain: "food-lover-recipe.firebaseapp.com",
  projectId: "food-lover-recipe",
  storageBucket: "food-lover-recipe.appspot.com",
  messagingSenderId: "981586224646",
  appId: "1:981586224646:web:3fce4c864cd92716404587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;