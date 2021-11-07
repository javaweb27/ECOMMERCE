import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions"

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

  return state
}

export default CartReducer