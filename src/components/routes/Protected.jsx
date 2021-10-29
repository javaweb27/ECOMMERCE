import { Redirect, Route } from "react-router"
import { BASE_PATH } from "../../BASE_PATH"

const Protected = ({component: Component,  path}) => {

  const userLogged = true

  if (!userLogged) {
    return <Redirect to={BASE_PATH + "/login"}/>
  }

  return (
    <Route exact path={path}>
      {Component}
    </Route>
  )
}

export default Protected