import Icon from "./icon"
import styles from "../../styles/elements/button-add-remove-from-cart.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice"

const ButtonAddRemoveFromCart = ({ cupcake }) => {
  const cart = useSelector(({cartSlice}) => cartSlice)
  const dispatch = useDispatch()
  
  const add = () => dispatch(addToCart(cupcake))
  const remove = () => dispatch(removeFromCart(cupcake.id))

  return (
    <>
      { cart.find(c => c.id === cupcake.id) ? 
        <button onClick={remove} className={`text ${styles["btn-remove"]}`}>
          <Icon name="cart_checked" className={styles["cart-checked"]}/>
          <Icon name="cart_remove" className={styles["cart-remove"]}/>
        </button>
        :
        <button onClick={add} className={`text ${styles["btn-add"]}`}>
          <Icon name="cart"/>
        </button>
      }
    </>
  )
}

export default ButtonAddRemoveFromCart