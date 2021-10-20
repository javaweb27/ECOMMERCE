import {number, string} from "prop-types"
import { useContext } from "react"
import { useRef, useState } from "react"
import CartContext from "../context/CartContext"
import useFetchPATCH from "../hooks/useFetchPATCH"

const Cupcake = ({
  id,
  description,
  img,
  flavor,
  color,
  price,
  sold
}) => {

  const imgCupcake = useRef()
  const [hasBeenSold, setHasBeenSold] = useState(sold)

  const [state, dispatch] = useContext(CartContext)
  const sell = useFetchPATCH
  
  return (
    <article className="cupcake">
      <div>
        <img ref={imgCupcake} className={hasBeenSold ? "img sold" : "img"} src={img} alt={flavor} />
      </div>
      <p className="text">{description}</p>
      <span className="text">Color: {color}</span>
      <span className="text">Precio: {price}</span>
      <div>
        { hasBeenSold ? 
          <span className="text">vendido</span> 
          : 
          <button onClick={() => sell(id, setHasBeenSold)}>Vender</button>
        }
        { state.cart.find(c => c === id) ? 
          <button className="text">Remover Del Carrito</button>
          :
          <button>Agregar al carrito</button>
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