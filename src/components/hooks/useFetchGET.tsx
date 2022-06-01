import { useState, useEffect } from "react"
import { NODE_API } from "../../config"

/**
 * @param {string} endpoint 
 * @returns an array with data and error
 */

const useFetchGET = (endpoint: string) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<boolean>()

  useEffect(() => {
    fetch(`${NODE_API}/${endpoint}`)
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