import useFetchGET from "../hooks/useFetchGET"
import CupcakesMostSoldContext from "./CupcakesMostSoldContext"

const CupcakesMostSoldProvider = ({children, request}) => {

  const [cupcakes, error] = useFetchGET(request)

  return (
    <CupcakesMostSoldContext.Provider value={{cupcakes, error}}>
      {children}
    </CupcakesMostSoldContext.Provider>
  )
}

export default CupcakesMostSoldProvider