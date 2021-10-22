import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartCounter = () => {

  const [state] = useContext(CartContext)

  return (
    <span>Carrito: {state.cart.length}</span>
  )
}

export default CartCounter