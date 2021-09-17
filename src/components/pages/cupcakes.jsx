import { useEffect, useState } from "react"
import Cupcake from "../cards/Cupcake"
const Cupcakes = ({request, title}) => {

  const [cupcakes, setCupcakes] = useState()


  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}${request}`)
      .then(response => response.json())
      .then(data => setCupcakes(data))
  }, [request])

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
              price
            }) => (
              <Cupcake
                key={id}
                img={img}
                description={description}
                flavor={flavor}
                color={color}
                price={price}
              />
            ))
          }
          </div>
        </section>
      ) : (<span>cargando</span>)
    }
  </>
  )
}

export default Cupcakes