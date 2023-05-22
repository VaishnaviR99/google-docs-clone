// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXXiTbmd7rJpS1_iWnjCwt82yTKKQGdTs",
  authDomain: "docs-clone-2912b.firebaseapp.com",
  projectId: "docs-clone-2912b",
  storageBucket: "docs-clone-2912b.appspot.com",
  messagingSenderId: "1013895608300",
  appId: "1:1013895608300:web:558040d0402ffde46532c9",
  measurementId: "G-CEXXE5WZ9Y"
};

//const app = !firebaseConfig.apps.length ? firebaseConfig.initializeApp(firebaseConfig) : firebase.app();
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
  //const db =app.firestore();

  //export {db};