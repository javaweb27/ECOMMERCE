import { ADD_TO_CART, REMOVE_FROM_CART, SELL_CUPCAKE } from "../actionTypes"

const initialState = []

const CartReducer = (state = initialState, {type, cupcake}) => {

  if (type === ADD_TO_CART) {
    return state.concat(cupcake)
  }

  if (type === REMOVE_FROM_CART) {
    return state.filter(c => c.id !== cupcake.id)
  }
  
  if (type === SELL_CUPCAKE) {
    return state.map(c => {
      if (c.id === cupcake.id) {
        c.sold = cupcake.sold
      }
      return c
    })
  }

  return state
}

export default CartReducer