const Cupcake = ({
  description,
  img,
  flavor,
  color,
  price
}) => (
  <div className="cupcake">
    <div>
      <img className="img" src={img} alt={flavor} />
    </div>
    <p className="text">{description}</p>
    <span className="text">Color: {color}</span>
    <span className="text">Precio: {price}</span>
  </div>
)

export default Cupcake