import {number, string} from "prop-types"
import { useRef, useState } from "react"

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

  
  const sell = () => {

    if (!sold) {
      fetch(`${process.env.REACT_APP_URL_API}cupcakes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sold: true
        })
      })
      .then(response => response.ok && response.json())
      .then(data => setHasBeenSold(data.sold))

      // const element = imgCupcake.current
      // element.classList.add("sold")
    }
  }
  
  return (
    <article className="cupcake">
      <div>
        <img ref={imgCupcake} className={hasBeenSold ? "img sold" : "img"} src={img} alt={flavor} />
      </div>
      <p className="text">{description}</p>
      <span className="text">Color: {color}</span>
      <span className="text">Precio: {price}</span>
      {hasBeenSold ? <span className="text">vendido</span> : <button onClick={sell}>Vender</button>}
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