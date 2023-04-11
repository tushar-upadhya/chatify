import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDBzKkGDx6xnS_Uol8JjEZVrTkmb9CmCA",
    authDomain: "one-to-one-72688.firebaseapp.com",
    projectId: "one-to-one-72688",
    storageBucket: "one-to-one-72688.appspot.com",
    messagingSenderId: "974511287312",
    appId: "1:974511287312:web:38916a99b8fd1180e86e95",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
