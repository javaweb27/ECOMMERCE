import { Redirect, Route } from "react-router"
import { BASE_PATH } from "../../BASE_PATH"
import CupcakesProvider from "../context/cupcakes/CupcakesProvider"

const Public = ({component: Component,  path, request}) => {

  // const userLogged = false

  // if (userLogged) {
  //   return <Redirect to={BASE_PATH + "/"}/>
  // }

  return (
    <CupcakesProvider request={request}>
      <Route exact path={path}>
        {Component}
      </Route>
    </CupcakesProvider>
  )
}

export default Public