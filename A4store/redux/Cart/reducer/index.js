import {combineReducers} from "redux";
import {cartReducer} from "./reducer";

export default combineReducers({
  cart: cartReducer,
});
