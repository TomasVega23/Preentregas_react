import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD51URLu8WT10FKRzEsqV2e3_3xuyZsmsA",
  authDomain: "proyecto-final-react-23c96.firebaseapp.com",
  projectId: "proyecto-final-react-23c96",
  storageBucket: "proyecto-final-react-23c96.appspot.com",
  messagingSenderId: "344105906196",
  appId: "1:344105906196:web:254a5c5c2d2ab58a513701"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

