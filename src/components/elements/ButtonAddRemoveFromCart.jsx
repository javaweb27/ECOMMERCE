import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/actions"

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
        <button onClick={removeFromCart} className="text btn-remove">Remover Del Carrito</button>
        :
        <button onClick={addToCart} className="text btn-add">Agregar al carrito</button>
      }
    </>
  )
}

export default ButtonAddRemoveFromCart