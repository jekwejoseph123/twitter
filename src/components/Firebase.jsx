import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDc7MzD6U9zenPSHgeMsZA5gUIQknk_Msk",
    authDomain: "twitter-clone-510e1.firebaseapp.com",
    projectId: "twitter-clone-510e1",
    storageBucket: "twitter-clone-510e1.appspot.com",
    messagingSenderId: "86987116133",
    appId: "1:86987116133:web:e7c16758eb0ff4bb66c08c",
    measurementId: "G-9LRM0NKDJP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
