import { useSelector } from "react-redux"

const CartCounter = () => {

  const count = useSelector(({ cartSlice }) => cartSlice.cupcakes.length)

  return (
    <span>Carrito: {count}</span>
  )
}

export default CartCounter