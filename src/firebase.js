import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD09i-K3FpgUtyS2WWrVSiprImj_Baazqs",
    authDomain: "clone-42f98.firebaseapp.com",
    databaseURL: "https://clone-42f98.firebaseio.com",
    projectId: "clone-42f98",
    storageBucket: "clone-42f98.appspot.com",
    messagingSenderId: "943973817131",
    appId: "1:943973817131:web:ef664011f91a30879d036e",
    measurementId: "G-Z44VHK9PQ6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};