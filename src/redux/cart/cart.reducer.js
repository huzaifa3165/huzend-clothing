import { cartAction } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const isCartHiddenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartAction.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return {
        state,
      };
  }
};

export default isCartHiddenReducer;
