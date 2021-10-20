import { useReducer } from "react"
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions"
import CartContext from "./CartContext"

const initialState = {
  cart: [1, 2, 3, 4, 5, 6]
}

const cartReducer = (state, {type, cupcake}) => {

  if (type === ADD_TO_CART) {
    return {
      cart: state.cart.concat(cupcake)
    }
  }

  if (type === REMOVE_FROM_CART) {
    return {
      cart: state.cart.filter(c => c.id !== cupcake)
    }
  }

  return state
}

const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider