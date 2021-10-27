import useFetchGET from "../../hooks/useFetchGET"
import CupcakesContext from "./CupcakesContext"

const CupcakesProvider = ({children, request}) => {

  if (!request) return children

  const [cupcakes, error] = useFetchGET(request)

  return (
    <CupcakesContext.Provider value={{cupcakes, error}}>
      {children}
    </CupcakesContext.Provider>
  )
}

export default CupcakesProvider