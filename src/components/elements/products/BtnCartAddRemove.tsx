import classes from "./btn-cart-add-remove.module.scss"
import Icon from "../icon"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../redux/reducers/cartSlice"
import { I_ProdPartCartAdd, I_ProdPartData } from "./prodInterface"

interface I_Props {
  data: I_ProdPartData,
  isCart: boolean
}

const BtnCartAddRemove = ({ data, isCart }: I_Props) => {
  const dispatch = useDispatch()

  const cart: I_ProdPartCartAdd[] = useSelector(({ cartSlice }: any) => cartSlice.products)
  const found = cart.find(c => c.id === data.id)
  let qtyToAdd = 1

  const add = () => dispatch(addToCart({
    ...data,
    qty: qtyToAdd
  }))

  const remove = () => dispatch(removeFromCart({
    id: data.id,
    qty: qtyToAdd
  }))

  return <>
    {isCart && "Qty: " + found?.qty}
    <div className={classes.buttons}>
      <button onClick={add} className={classes["btn-add"]}>
        <Icon name="cart" />
      </button>
      <button onClick={remove} disabled={found ? false : true} className={classes["btn-remove"]}>
        <Icon name="cart_remove" className={classes["cart-remove"]} />
      </button>
    </div>
  </>
}

export default BtnCartAddRemove