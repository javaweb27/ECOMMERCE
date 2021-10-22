import { useContext } from "react"
import Cupcake from "../cards/Cupcake"
import CupcakesContext from "../context/CupcakesContext"
import CupcakesMostSoldContext from "../context/CupcakesMostSoldContext"

const Cupcakes = ({title}) => {

  const cupcakesContext = useContext(CupcakesContext)
  const cupcakesMostSoldContext = useContext(CupcakesMostSoldContext)

  const context = (
    title === "h2" ? cupcakesMostSoldContext : 
    title === "h1" ? cupcakesContext :  false
  )

  const {cupcakes, error} = context

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