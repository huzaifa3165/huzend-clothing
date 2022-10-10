import { createSelector } from "reselect";

const selectCollection = (state) => state.collectionsReducer;

export const selectShopData = createSelector(
  [selectCollection],
  (collections) => collections.SHOP_DATA
);
