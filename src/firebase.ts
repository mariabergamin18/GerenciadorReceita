import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiApuxHf45pzwxkErVi7UHLL5eJJZ8ViM",
  authDomain: "gerenciador-receita.firebaseapp.com",
  projectId: "gerenciador-receita",
  storageBucket: "gerenciador-receita.appspot.com",
  messagingSenderId: "139563465931",
  appId: "1:139563465931:web:c8d46f62827cd15887ef4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
