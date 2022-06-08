import classes from "./btn-add-remove-from-cart.module.scss"
import Icon from "../icon"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../redux/reducers/cartSlice"
import { I_ProductPartData } from "./productInterface"

const BtnAddRemoveFromCart = (props: I_ProductPartData) => {
  const dispatch = useDispatch()

  const cart: I_ProductPartData[] = useSelector(({ cartSlice }: any) => cartSlice.products)
  const isInCart = cart.find(c => c.id === props.id) ? true : false

  const add = () => dispatch(addToCart(props))
  const remove = () => dispatch(removeFromCart(props.id))

  return (
    <button onClick={isInCart ? remove : add}
      className={classes[isInCart ? "btn-remove" : "btn-add"]}
    >
      {isInCart ? <>
        <Icon name="cart_checked" className={classes["cart-checked"]} />
        <Icon name="cart_remove" className={classes["cart-remove"]} />
      </> : <Icon name="cart" />
      }
    </button>
  )
}

export default BtnAddRemoveFromCart