import useFetchGET from "../hooks/useFetchGET"

const Services = ({request}) => {

  const [services, error] = useFetchGET(request)

  if (error) {
    return <span>hubo un error en services</span>
  }

  return (
    <section className="services">
      {
        services ? services.map(s => (
          <article key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
          </article>
        ))
        :
        <span>cargando</span>
      }
    </section>
  )
}

export default Services