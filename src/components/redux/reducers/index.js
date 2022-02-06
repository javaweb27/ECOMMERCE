import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CupcakesReducer from "./CupcakesReducer";

const reducer = combineReducers({
  cart: CartReducer,
  cupcakes: CupcakesReducer
})

export default reducer
