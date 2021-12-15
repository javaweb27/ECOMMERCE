import { useContext } from "react"
import {number, string} from "prop-types"
import CartContext from "../context/cart/CartContext"
import CupcakesContext from "../context/cupcakes/CupcakesContext"
import ButtonSell from "../elements/ButtonSell"
import ButtonAddRemoveFromCart from "../elements/ButtonAddRemoveFromCart"

const Cupcake = ({ id, description, img, flavor, color, price, sold }) => {

  const {cupcakesState, cupcakesDispatch} = useContext(CupcakesContext)
  const [cartState, cartDispatch] = useContext(CartContext)

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
        <ButtonSell 
          id={id} 
          sold={sold} 
          cupcakesState={cupcakesState}
          cupcakesDispatch={cupcakesDispatch}
          cartDispatch={cartDispatch}
        />

        <ButtonAddRemoveFromCart 
          cartState={cartState} 
          cartDispatch={cartDispatch}
          cupcake={{ id, description, img, flavor, color, price, sold }}
        />
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