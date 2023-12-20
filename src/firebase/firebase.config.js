// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpZHQ0PeRMjUAK0pcUKcYsfWvt2ryA-zQ",
  authDomain: "band-shop-3c7a6.firebaseapp.com",
  projectId: "band-shop-3c7a6",
  storageBucket: "band-shop-3c7a6.appspot.com",
  messagingSenderId: "431561617301",
  appId: "1:431561617301:web:2679e6d85f0366b0cd109c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app