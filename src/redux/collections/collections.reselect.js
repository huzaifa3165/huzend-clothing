import { createSelector } from "reselect";

const selectCollection = (state) => state.collectionsReducer;

export const selectShopData = createSelector(
  [selectCollection],
  (collections) => collections.shopData
);

export const selectIsFetching = createSelector(
  [selectCollection],
  (collections) => collections.isFetching
);
