import { useContext } from "react"
import Cupcake from "../cards/Cupcake"
import CupcakesContext from "../context/cupcakes/CupcakesContext"

const Cupcakes = ({title, specificCupcakes}) => {

  const {cupcakes, error} = useContext(CupcakesContext)

  const cupcakesRequested = (cupcakes && specificCupcakes == "MOST_SOLD" ? 
    cupcakes.filter(c => c.flavor === 'Chocolate')
    : 
    cupcakes
  )
    
  if (!cupcakesRequested) return <span>No hay cupcakes</span>

  if (error) return <span>hubo un error en cupcakes</span>

  return (
  <>
    { title === "h1" && <h1 className="title">Pagina de Cupcakes</h1>}
    {
      cupcakesRequested ? (
        <section className="cupcakes">
          { title === "h2" && <h2 className="title">Cupcakes mas vendidos</h2>}
          <div className="container">
          {
            cupcakesRequested.map(({id, description, img, flavor, color, price, sold}) => {
              return (
                <Cupcake
                  key={id}
                  id={id}
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