import { cartAction } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: cartAction.TOGGLE_CART_HIDDEN,
  };
};
