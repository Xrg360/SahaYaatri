import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Include this if you're using Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBXlGO6KnM9aDiZeNGy-sfKrWVCHAy8IaI",
    authDomain: "sahayaatra-80c63.firebaseapp.com",
    projectId: "sahayaatra-80c63",
    storageBucket: "sahayaatra-80c63.appspot.com",
    messagingSenderId: "718999864506",
    appId: "1:718999864506:web:cdb806f3bd5e82dc90ee83"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore(); // Include this if you're using Firestore