import { useState, useEffect } from "react"

const useFetchGET = endpoint => {

  const [data, setData] = useState()
  const [error, setError] = useState()
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_API_URL}${endpoint}`)
      .then(response => response.ok && response.json())
      .then(json => {
        setData(json)
        setError(false)
      })
      .catch(err => {
        console.error(err)
        setData(null)
        setError(true)
      })
  }, [endpoint])

  return [data, error]
}

export default useFetchGET
