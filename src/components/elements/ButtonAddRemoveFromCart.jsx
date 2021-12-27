import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/actions"
import Icon from "../../svg/icon"

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
        <button onClick={removeFromCart} className="text btn-remove">
          {Icon("cart_checked", "bi-cart-checked", "100%" )}
          {Icon("cart_remove", "bi-cart-remove", "100%" )}
        </button>
        :
        <button onClick={addToCart} className="text btn-add">{Icon("cart", "bi-cart", "100%" )}</button>
      }
    </>
  )
}

export default ButtonAddRemoveFromCart