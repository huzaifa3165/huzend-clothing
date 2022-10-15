import { collectionType } from "./collections.types";
const INITIAL_STATE = {
  shopData: null,
  isFetching: true,
  errorMessage: undefined,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionType.FETCH_COLLECTIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case collectionType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        shopData: action.payload,
        isFetching: false,
      };
    case collectionType.FETCH_COLLECTIONS_FAILIURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
