import { useContext } from "react"
import {number, string} from "prop-types"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/actions"
import CartContext from "../context/cart/CartContext"
import CupcakesContext from "../context/cupcakes/CupcakesContext"
import useFetchPATCH from "../hooks/useFetchPATCH"
import { db } from "../../db"

const Cupcake = ({ id, description, img, flavor, color, price, sold }) => {

  const {cupcakesState, cupcakesDispatch} = useContext(CupcakesContext)
  const [cartState, cartDispatch] = useContext(CartContext)

  const addToCart = () => cartDispatch({
    type: ADD_TO_CART,
    cupcake: { id, description, img, flavor, color, price, sold }
  })

  const removeFromCart = () => cartDispatch({
    type: REMOVE_FROM_CART,
    cupcake: { id, description, img, flavor, color, price, sold }
  })

  const sell = () => {
    if (cupcakesState.cupcakes && !cupcakesState.error) {
      return useFetchPATCH(id, cupcakesDispatch, cartDispatch)
    }

    for (const c of db.cupcakes) {
      if (c.id === id) {
        c.sold = true
      }
    }
  }
  
  return (
    <article className="cupcake">
      <div className="img-container">
        <img className={sold ? "img sold" : "img"} src={img} alt={flavor} />
      </div>
      <div className="description">
        <p className="text">{description}</p>
        <span className="text">Color: {color}</span>
        <span className="text">Precio: {price}</span>
      </div>
      <div className="buttons">
        { sold ? 
          <span className="text">vendido</span> 
          : 
          <button onClick={sell}>Vender</button>
        }
        { cartState.cart.find(c => c.id === id) ? 
          <button onClick={removeFromCart} className="text">Remover Del Carrito</button>
          :
          <button onClick={addToCart}>Agregar al carrito</button>
        }
      </div>
    </article>
  )
} 

Cupcake.propTypes = {
  price: number,
  color: string.isRequired,
  description: string.isRequired,
  flavor: string.isRequired,
  img: string
}

Cupcake.defaultProps = {
  img: "https://images.unsplash.com/photo-1455731657401-43502b7c1ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  price: 0
}

export default Cupcake