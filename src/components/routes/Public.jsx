import { Redirect, Route } from "react-router"
import { BASE_PATH } from "../../BASE_PATH"

const Public = ({component: Component, path}) => {
  const userLogged = false

  if (userLogged) {
    return <Redirect to={BASE_PATH + "/"}/>
  }

  return (
    <Route exact path={path}>
      {Component}
    </Route>
  )
}

export default Public