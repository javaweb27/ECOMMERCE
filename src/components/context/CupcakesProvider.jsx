import useFetchGET from "../hooks/useFetchGET"
import CupcakesContext from "./CupcakesContext"

const CupcakesProvider = ({children, request}) => {

  const [cupcakes, error] = useFetchGET(request)
  
  const context = {
    cupcakes,
    error
  }

  return (
    <CupcakesContext.Provider value={context}>
      {children}
    </CupcakesContext.Provider>
  )
}

export default CupcakesProvider