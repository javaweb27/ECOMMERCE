import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/actions"
import Icon from "./icon"
import styles from "../../styles/elements/button-add-remove-from-cart.module.scss"

const ButtonAddRemoveFromCart = ({cartState, cartDispatch, cupcake}) => {
  const addToCart = () => cartDispatch({
    type: ADD_TO_CART,
    cupcake: cupcake
  })
  const removeFromCart = () => cartDispatch({
    type: REMOVE_FROM_CART,
    cupcake: cupcake
  })

  return (
    <>
      { cartState.cart.find(c => c.id === cupcake.id) ? 
        <button onClick={removeFromCart} className={`text ${styles["btn-remove"]}`}>
          <Icon name="cart_checked" className={styles["cart-checked"]}/>
          <Icon name="cart_remove" className={styles["cart-remove"]}/>
        </button>
        :
        <button onClick={addToCart} className={`text ${styles["btn-add"]}`}>
          <Icon name="cart"/>
        </button>
      }
    </>
  )
}

export default ButtonAddRemoveFromCart