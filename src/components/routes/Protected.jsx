import { Redirect, Route } from "react-router"
import { BASE_PATH } from "../../BASE_PATH"

const Protected = ({component: Component}) => {

  const userLogged = true

  if (!userLogged) {
    return <Redirect to={BASE_PATH + "/login"}/>
  }

  return (
    <Route render={Component}/>
  )
}

export default Protected