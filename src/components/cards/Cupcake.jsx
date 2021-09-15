const Cupcake = ({
  descripcion,
  img,
  sabor,
  color,
  precio}) => (

  <div>
    <img src={img} alt={sabor} />
    <p>{descripcion}</p>
    <span>Color: {color}</span>
    <span>Precio: {precio}</span>
  </div>
)

export default Cupcake