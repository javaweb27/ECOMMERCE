import { useAppSelector } from "../../hooks/reduxHooks"

const CartCounter = () => {

  const cart = useAppSelector(({ cart }) => cart.products)
  let totalQty = 0

  for (const prod of cart) {
    totalQty += prod.qty
  }

  return (
    <span>Carrito: {totalQty}</span>
  )
}

export default CartCounter