import {useState, useEffect} from "react"

const Services = ({request}) => {

  const [services, setServices] = useState()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}${request}`)
      .then(response => response.json())
      .then(data => setServices(data))
  }, [request])

  if (!services) {
    return <span>No hay servicios</span>
  }

  return (
    <div>
      {
        services.map(s => (
          <div key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Services