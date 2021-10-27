import { Route } from "react-router"
import CupcakesProvider from "../context/cupcakes/CupcakesProvider"

const Protected = ({component: Component,  path, request}) => {

  return (
    <CupcakesProvider request={request}>
      <Route exact path={path}>
        {Component}
      </Route>
    </CupcakesProvider>
  )
}

export default Protected