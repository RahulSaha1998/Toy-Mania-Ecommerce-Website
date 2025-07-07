// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   projectId:import.meta.env.VITE_PROJECTID,
//   storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDR4qr6RkEndnoLZnnWqzphEyCN_4pgxPQ",
  authDomain: "assignment-task-15be0.firebaseapp.com",
  projectId: "assignment-task-15be0",
  storageBucket: "assignment-task-15be0.firebasestorage.app",
  messagingSenderId: "512268870766",
  appId: "1:512268870766:web:1cf1b499c17956dc3e727f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;