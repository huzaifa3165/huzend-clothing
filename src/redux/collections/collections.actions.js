import { collectionType } from "./collections.types";

export const collectionAction = (data) => {
  return {
    type: collectionType.GET_DB_DATA,
    payload: data,
  };
};
