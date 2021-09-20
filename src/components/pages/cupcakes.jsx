import Cupcake from "../cards/Cupcake"
import useFetch from "../hooks/useFetch"
const Cupcakes = ({request, title}) => {

  const [cupcakes, error] = useFetch(request)

  if (!cupcakes) {
    return <span>No hay servicios</span>
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