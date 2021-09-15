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
  <section>
    <h1>Pagina de Cupcakes</h1>
    {
      cupcakes ? (
        <div>
          {
            cupcakes.map(c => <Cupcake/>)
          }
        </div>
      ) : (<span>cargando</span>)
    }
  </section>
  )
}

export default Cupcakes