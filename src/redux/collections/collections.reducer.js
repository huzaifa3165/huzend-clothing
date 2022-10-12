import { collectionType } from "./collections.types";
const INITIAL_STATE = { shopData: null };

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionType.GET_DB_DATA:
      return {
        ...state,
        shopData: action.payload,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
