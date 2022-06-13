import { useState, useEffect } from "react"
import { NODE_API } from "../../config"

/**
 * @param {string} endpoint 
 * @returns an array of products, if fetch fails null is returned
 */

const useFetchGET = (endpoint: string) => {
  const [data, setData] = useState<any>()


  useEffect(() => {
    fetch(`${NODE_API}/${endpoint}`)
      .then(response => response.ok && response.json())
      .then(json => {
        setData(json)
      })
      .catch(err => {
        console.error(err)
        setData(null)
      })
  }, [endpoint])

  return data
}

export default useFetchGET