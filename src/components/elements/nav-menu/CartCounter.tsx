import { useSelector } from "react-redux"
import { I_ProdPartCartAdd } from "../products/prodInterface"

const CartCounter = () => {

  const cart: I_ProdPartCartAdd[] = useSelector(({ cartSlice }: any) => cartSlice.products)
  let totalQty = 0

  for (const prod of cart) {
    totalQty += prod.qty
  }

  return (
    <span>Carrito: {totalQty}</span>
  )
}

export default CartCounter