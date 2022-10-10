import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import collectionsReducer from "./collections/collections.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cartReducer: cartReducer,
  directoryReducer: directoryReducer,
  collectionsReducer: collectionsReducer,
});
export default persistReducer(persistConfig, rootReducer);
