import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAenHrc3gnztcvmd7yrB4y8njcNJbSvviA",
    authDomain: "fir-react-db2be.firebaseapp.com",
    projectId: "fir-react-db2be",
    storageBucket: "fir-react-db2be.appspot.com",
    messagingSenderId: "482703767681",
    appId: "1:482703767681:web:6b69aae5b7ed49d88bb580"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  