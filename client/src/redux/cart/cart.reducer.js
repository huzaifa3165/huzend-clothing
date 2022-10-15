import { cartAction } from "./cart.types";
import { addItemToCart, decrementFromCartFunc } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartAction.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartAction.ADD_ITEM:
      return {
        ...state,

        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartAction.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case cartAction.DECREMENT_ITEM:
      return {
        ...state,
        cartItems: decrementFromCartFunc(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
