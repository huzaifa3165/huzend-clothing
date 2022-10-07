import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDE72G1u8ghqXUivFxNDvK25hapQvYJDVo",
  authDomain: "huzend-clothing.firebaseapp.com",
  projectId: "huzend-clothing",
  storageBucket: "huzend-clothing.appspot.com",
  messagingSenderId: "189157951362",
  appId: "1:189157951362:web:f4c3faae78e3774033b19b",
  measurementId: "G-68MR2L8G42",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
