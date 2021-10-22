import {useState, useEffect} from "react"
import { REACT_APP_URL_API } from "../../../API_URL"

const useFetchGET = endpoint => {

  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetch(`${REACT_APP_URL_API}${endpoint}`)
      .then(response => response.ok && response.json())
      .then(data => setData(data))
      .catch(err => setError(err))
  }, [endpoint])

  return [data, error]
}

export default useFetchGET