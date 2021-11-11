import { db } from "../../db"
import useFetchGET from "../hooks/useFetchGET"

const Services = ({request}) => {

  let [services, error] = useFetchGET(request)

  if (!services && error || !services && !error) services = db.services

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