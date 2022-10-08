import { combineReducers } from "redux";
import isCartHiddenReducer from "./cart/cart.reducer";

import userReducer from "./user/user.reducer";
export default combineReducers({
  user: userReducer,
  isCartHidden: isCartHiddenReducer,
});
