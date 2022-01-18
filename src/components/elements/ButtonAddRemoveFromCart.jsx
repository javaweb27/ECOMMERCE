import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/actions"
import Icon from "./icon"

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
          <Icon name="cart_checked" className="bi-cart-checked"/>
          <Icon name="cart_remove" className="bi-cart-remove"/>
        </button>
        :
        <button onClick={addToCart} className="text btn-add">
          <Icon name="cart" className="bi-cart"/>
        </button>
      }
    </>
  )
}

export default ButtonAddRemoveFromCart