import { useState, useEffect } from "react"

const useFetchGET = endpoint => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const LOCAL_API = import.meta.env.VITE_LOCAL_API_URL
  const NODE_API = import.meta.env.VITE_NODE_API_URL
  
  useEffect(() => {
    fetch(`${NODE_API || LOCAL_API}${endpoint}`)
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