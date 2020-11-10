import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHsfwxQXnekC2D8KZ3LukLBGjCMMHIeaU",
    authDomain: "tinder-clone-a8509.firebaseapp.com",
    databaseURL: "https://tinder-clone-a8509.firebaseio.com",
    projectId: "tinder-clone-a8509",
    storageBucket: "tinder-clone-a8509.appspot.com",
    messagingSenderId: "501502112288",
    appId: "1:501502112288:web:05e6cc588e9cdc8eadc245",
    measurementId: "G-5D69SBHNKL"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();


export default database;
