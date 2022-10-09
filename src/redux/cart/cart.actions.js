import { cartAction } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: cartAction.TOGGLE_CART_HIDDEN,
  };
};
export const addToCart = (item) => {
  return {
    type: cartAction.ADD_ITEM,
    payload: item,
  };
};
