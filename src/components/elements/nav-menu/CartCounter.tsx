import { useSelector } from "react-redux"

const CartCounter = () => {

  const count: number = useSelector(({ cartSlice }: any) => cartSlice.cupcakes.length)

  return (
    <span>Carrito: {count}</span>
  )
}

export default CartCounter