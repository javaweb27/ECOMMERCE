import { ADD_TO_CART, REMOVE_FROM_CART, SELL_CUPCAKE, START_INITIAL_STATE } from "../actionTypes"

//CART
export const addToCart = cupcake => ({
  type: ADD_TO_CART,
  cupcake
})

export const removeFromCart = cupcake => ({
  type: REMOVE_FROM_CART,
  cupcake
})

//CUPCAKES
export const startInitialState = (cupcakes, dataError = false) => ({
  type: START_INITIAL_STATE,
  cupcakes,
  error: dataError
})

export const sellCupcake = ({id, sold}) => ({
  type: SELL_CUPCAKE,
  cupcake: {
    id,
    sold
  }
})