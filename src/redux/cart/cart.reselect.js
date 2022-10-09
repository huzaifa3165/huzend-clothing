import { createSelector } from "reselect";

const selectCart = (state) => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((prevQuant, currentQuant) => {
      return prevQuant + currentQuant.quantity;
    }, 0)
);
