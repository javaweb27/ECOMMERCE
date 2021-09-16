const Cupcake = ({
  description,
  img,
  flavor,
  color,
  price
}) => (
  <div className="cupcake">
    <img className="img" src={img} alt={flavor} />
    <p>{description}</p>
    <span>Color: {color}</span>
    <span>Precio: {price}</span>
  </div>
)

export default Cupcake