  import firebase from "firebase";
  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCTIvF1t8hL64wAHxOMpgftBiPSXZ0gUvw",
    authDomain: "instagram-clone-29a65.firebaseapp.com",
    databaseURL: "https://instagram-clone-29a65.firebaseio.com",
    projectId: "instagram-clone-29a65",
    storageBucket: "instagram-clone-29a65.appspot.com",
    messagingSenderId: "222738772162",
    appId: "1:222738772162:web:a6ee709ac7f1194d944b5b",
    measurementId: "G-WZYZ85S02N"
  });

  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const storage=firebase.storage();
  export {db,auth,storage};