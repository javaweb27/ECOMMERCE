import { useEffect, useState } from "react"
import Cupcake from "../cards/Cupcake"
const Cupcakes = () => {

  const [cupcakes, setCupcakes] = useState()


  useEffect(() => {
    fetch("http://localhost:3050/cupcake")
      .then(response => response.json())
      .then(data => setCupcakes(data))
  }, [])

  return (
  <section className="cupcakes">
    <h1>Pagina de Cupcakes</h1>
    {
      cupcakes ? (
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
      ) : (<span>cargando</span>)
    }
  </section>
  )
}

export default Cupcakes