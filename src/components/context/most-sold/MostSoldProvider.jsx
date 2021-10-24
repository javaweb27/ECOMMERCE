import useFetchGET from "../../hooks/useFetchGET"
import MostSoldContext from "./MostSoldContext"

const MostSoldProvider = ({children, request}) => {

  const [cupcakes, error] = useFetchGET(request)

  return (
    <MostSoldContext.Provider value={{cupcakes, error}}>
      {children}
    </MostSoldContext.Provider>
  )
}

export default MostSoldProvider