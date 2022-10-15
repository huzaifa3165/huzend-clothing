import { collectionType } from "./collections.types";
import {
  firestore,
  mapCollectionsToObject,
} from "../../components/firebase/firebase.utils";

const fetchCollectionsRequest = () => {
  return {
    type: collectionType.FETCH_COLLECTIONS_REQUEST,
  };
};

const fetchCollectionSuccess = (collectionObj) => {
  return {
    type: collectionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionObj,
  };
};

const fetchCollectionFailure = (error) => {
  return {
    type: collectionType.FETCH_COLLECTIONS_FAILIURE,
    payload: error.message,
  };
};

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsRequest());
    collectionRef
      .get()
      .then(async (snapShot) => {
        const collectionsData = await mapCollectionsToObject(snapShot);
        dispatch(fetchCollectionSuccess(collectionsData));
      })
      .catch((error) => {
        dispatch(fetchCollectionFailure(error));
      });
  };
};
