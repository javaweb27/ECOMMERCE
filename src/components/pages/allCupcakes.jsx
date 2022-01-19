import { useContext } from "react"
import CupcakesContext from "../context/cupcakes/CupcakesContext"
import ContentContainer from "../elements/ContentContainer"
import Cupcake from "../cards/Cupcake"

const AllCupcakes = () => {
  const {cupcakesState} = useContext(CupcakesContext)

  return (
    <ContentContainer>
      <section className="cupcakes">
        <h1 className="title">Todos los Cupcakes</h1>
        <div className="container">
          {
            cupcakesState.cupcakes ? cupcakesState.cupcakes.map(({
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
    </ContentContainer>
  )
}

export default AllCupcakes