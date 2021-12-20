// Your web app's Firebase configuration
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const  db = getFirestore(firebaseapp);

  

  const auth = getAuth(firebaseapp);
  onAuthStateChanged(auth, user => {
  // Check for user status
  });

  export {auth};

  export default db;