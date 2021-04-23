import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAyp7nP9vav_Ret9lCNBpw1kZmwDuT2rWs",
    authDomain: "grocery-inventory-cdee2.firebaseapp.com",
    projectId: "grocery-inventory-cdee2",
    storageBucket: "grocery-inventory-cdee2.appspot.com",
    messagingSenderId: "268578840819",
    appId: "1:268578840819:web:37bfa51d5148e64bf69786"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
