// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTde7hrdWunyL-ScqIcNmWkwT0w-L2C-s",
  authDomain: "gympope-9f9c3.firebaseapp.com",
  projectId: "gympope-9f9c3",
  storageBucket: "gympope-9f9c3.appspot.com",
  messagingSenderId: "866742471199",
  appId: "1:866742471199:web:5424b1c900b8f46510232a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;