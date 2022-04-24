import Icon from "./icon"
import styles from "../../styles/elements/button-add-remove-from-cart.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice"

const ButtonAddRemoveFromCart = ({ cupcake }) => {
  const dispatch = useDispatch()
  const cart = useSelector(({ cartSlice }) => cartSlice)
  const isInCart = cart.find(c => c.id === cupcake.id) ? true : false

  const add = () => dispatch(addToCart(cupcake))
  const remove = () => dispatch(removeFromCart(cupcake.id))

  return (
    <button onClick={isInCart ? remove : add}
      className={styles[isInCart ? "btn-remove" : "btn-add"]}
    >
      {isInCart ? <>
        <Icon name="cart_checked" className={styles["cart-checked"]} />
        <Icon name="cart_remove" className={styles["cart-remove"]} />
      </> : <Icon name="cart" />
      }
    </button>
  )
}

export default ButtonAddRemoveFromCart