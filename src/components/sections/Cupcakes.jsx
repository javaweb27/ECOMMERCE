import { useContext } from "react"
import Cupcake from "../cards/Cupcake"
import CupcakesContext from "../context/cupcakes/CupcakesContext"

const Cupcakes = ({title, specificCupcakes}) => {

  const {cupcakesState} = useContext(CupcakesContext)
  const {cupcakes} = cupcakesState

  const cupcakesRequested = (cupcakes && specificCupcakes == "MOST_SOLD" ? 
    cupcakes.filter(c => c.flavor === 'Chocolate')
    : 
    cupcakes
  )

  return (
    <>
      { title === "h1" && <h1 className="title">Pagina de Cupcakes</h1>}
      <section className="cupcakes">
        { title === "h2" && <h2 className="title">Cupcakes mas vendidos</h2> }
        <div className="container">
          {
            cupcakesRequested ? cupcakesRequested.map(({
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
            : 
            <span>cargando</span>
          }
        </div>
      </section>
    </>
  )
}

export default Cupcakes