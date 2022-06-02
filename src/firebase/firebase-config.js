import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyDqLTfheSnaKat2aCG7IF1kifcczpktfng",
    authDomain: "react-app-cursos-e6970.firebaseapp.com",
    projectId: "react-app-cursos-e6970",
    storageBucket: "react-app-cursos-e6970.appspot.com",
    messagingSenderId: "595078559887",
    appId: "1:595078559887:web:77db24af27a6cbe7f898fa"
  
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}