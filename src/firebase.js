import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNY8WDlLOpmHpS1I6x8o_3xD9lJLmPP0E",
  authDomain: "it-business-app.firebaseapp.com",
  projectId: "it-business-app",
  storageBucket: "it-business-app.appspot.com",
  messagingSenderId: "360876963869",
  appId: "1:360876963869:web:6fb4b38fb71d349561eef4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
