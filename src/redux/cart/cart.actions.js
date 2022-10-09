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
export const removeFromCart = (item) => {
  return {
    type: cartAction.REMOVE_ITEM,
    payload: item,
  };
};

export const decrementFromCart = (item) => {
  return {
    type: cartAction.DECREMENT_ITEM,
    payload: item,
  };
};
