import { useEffect, useReducer } from "react"
import { db } from "../../../db"
import useFetchGET from "../../hooks/useFetchGET"
import { START_INITIAL_STATE } from "../actions"
import CupcakesContext from "./CupcakesContext"
import CupcakesReducer from "./CupcakesReducer"

const CupcakesProvider = ({children, request}) => {

  const initialState = {}

  const [cupcakes, error] = useFetchGET(request)
  const [cupcakesState, cupcakesDispatch] = useReducer(CupcakesReducer, initialState)

  useEffect(()=>{
    if (cupcakes && !error) {
      cupcakesDispatch({
        type: START_INITIAL_STATE,
        cupcakes: cupcakes,
        error: error
      })
      return
    }

    cupcakesDispatch({
      type: START_INITIAL_STATE,
      cupcakes: db.cupcakes,
      error: error
    })
  }, [cupcakes, error])

  return (
    <CupcakesContext.Provider value={{cupcakesState, cupcakesDispatch}}>
      {children}
    </CupcakesContext.Provider>
  )
}

export default CupcakesProvider