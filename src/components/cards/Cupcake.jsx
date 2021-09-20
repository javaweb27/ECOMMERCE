import {number, string} from "prop-types"

const Cupcake = ({
  description,
  img,
  flavor,
  color,
  price
}) => (
  <article className="cupcake">
    <div>
      <img className="img" src={img} alt={flavor} />
    </div>
    <p className="text">{description}</p>
    <span className="text">Color: {color}</span>
    <span className="text">Precio: {price}</span>
  </article>
)

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