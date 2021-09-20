import PropTypes from "prop-types"

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
  price: PropTypes.number,
  color: PropTypes.string,
  description: PropTypes.string,
  flavor: PropTypes.string,
  img: PropTypes.string
}

export default Cupcake