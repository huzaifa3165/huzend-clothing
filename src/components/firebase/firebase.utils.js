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

export const createNewUserIfExist = (authenticatedUser, additional) => {
  const userRef = firestore.doc(`users/${authenticatedUser.uid}`);
  const snapShot = userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = authenticatedUser;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additional,
      });
    } catch (error) {
      console.log("Error in adding Email to Database\n", error);
    }
  }
  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionName,
  collectionObj
) => {
  const collectionsRef = firestore.collection(collectionName);
  const snapShotCol = await collectionsRef.get();
  if (snapShotCol.empty) {
    const batch = firestore.batch();
    collectionObj.forEach((obj) => {
      const newDocRef = collectionsRef.doc();
      batch.set(newDocRef, obj);
    });
    const data = await batch.commit();
    console.log(data);
    return data;
  }
};

export const mapCollectionsToObject = async (snapShotCol) => {
  if (snapShotCol) {
    const collectionArray = snapShotCol.docs.map((document) => {
      const { title, items } = Object.values(document.data())[0];
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: document.id,
        title,
        items,
      };
    });
    const collectionsDataObject = collectionArray.reduce(
      (accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      },
      {}
    );
    return collectionsDataObject;
  }
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
