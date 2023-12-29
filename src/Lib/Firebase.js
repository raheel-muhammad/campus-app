import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWDGWzo1TaDpeHg4Z9R5E9m-f9StQarlY",
  authDomain: "campus-app-b634f.firebaseapp.com",
  projectId: "campus-app-b634f",
  storageBucket: "campus-app-b634f.appspot.com",
  messagingSenderId: "809385762789",
  appId: "1:809385762789:web:24de93d4e19a3ebc50990c",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export { db, ref, set, onAuthStateChanged, onValue, auth };
