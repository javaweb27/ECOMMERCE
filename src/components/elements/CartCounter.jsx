import { useSelector } from "react-redux"

const CartCounter = () => {

  const cart = useSelector(({cartSlice}) => cartSlice)

  return (
    <span>Carrito: {cart.length}</span>
  )
}

export default CartCounter