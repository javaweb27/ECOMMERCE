import useFetch from "../hooks/useFetch"

const Services = ({request}) => {

  const [services, error] = useFetch(request)

  if (!services) {
    return <span>No hay servicios</span>
  }

  if (error) {
    return <span>hubo un error en services</span>
  }

  return (
    <section className="services">
      {
        services.map(s => (
          <article key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
          </article>
        ))
      }
    </section>
  )
}

export default Services