import { useAppSelector } from "../../hooks/reduxHooks"
import useNavMenuTrans from "./useNavMenuTrans"

const CartCounter = () => {
  const t = useNavMenuTrans()

  const cart = useAppSelector(({ cart }) => cart.products)
  let totalQty = 0

  for (const prod of cart) {
    totalQty += prod.qty
  }

  return (
    <span>{t.cart}: {totalQty}</span>
  )
}

export default CartCounter