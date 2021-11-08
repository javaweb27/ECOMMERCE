import { ADD_TO_CART, REMOVE_FROM_CART, SELL_CUPCAKE } from "../actions"

const CartReducer = (state, {type, cupcake}) => {

  if (type === ADD_TO_CART) {
    return {
      cart: state.cart.concat(cupcake),
    }
  }
  
  if (type === REMOVE_FROM_CART) {
    return {
      cart: state.cart.filter(c => c.id !== cupcake.id),
    }
  }
  
  if (type === SELL_CUPCAKE) {
    return {
      cart: state.cart.map(c => {
        if (c.id === cupcake.id) {
          c.sold = cupcake.sold
          return c
        }
        return c
      })
    }
  }

  return state
}

export default CartReducer