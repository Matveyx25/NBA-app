import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwpqH3uc0sYNPRxzgNVuWhiwBd9YVvXh8",
  authDomain: "nba-app-2-796a9.firebaseapp.com",
  projectId: "nba-app-2-796a9",
  storageBucket: "nba-app-2-796a9.firebasestorage.app",
  messagingSenderId: "944495812322",
  appId: "1:944495812322:web:57adc14afa943ac5dcc8bb",
  measurementId: "G-7VDJC6FXYF"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

