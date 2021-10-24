import { useReducer } from "react"
import CartContext from "./CartContext"
import CartReducer from "./CartReducer"

const initialState = {
  cart: []
}

const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider