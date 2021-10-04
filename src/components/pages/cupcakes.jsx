import { useContext } from "react"
import Cupcake from "../cards/Cupcake"
import CupcakesContext from "../context/CupcakesContext"

const Cupcakes = ({title}) => {

  const {cupcakes, error} = useContext(CupcakesContext)

  if (!cupcakes) {
    return <span>No hay cupcakes</span>
  }

  if (error) {
    return <span>hubo un error en cupcakes</span>
  }

  return (
  <>
    { title === "h1" && <h1 className="title">Pagina de Cupcakes</h1>}
    {
      cupcakes ? (
        <section className="cupcakes">
          { title === "h2" && <h2 className="title">Cupcakes mas vendidos</h2>}
          <div className="container">
          {
            cupcakes.map(({
              id,
              description,
              img,
              flavor,
              color,
              price,
              sold
            }) => {
              return (
                <Cupcake
                  idKey={id}
                  description={description}
                  img={img}
                  flavor={flavor}
                  color={color}
                  price={price}
                  sold={sold}
                />
              )
            })
            
          }
          </div>
        </section>
      ) : (<span>cargando</span>)
    }
  </>
  )
}

export default Cupcakes