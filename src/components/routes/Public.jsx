import { Redirect, Route } from "react-router"
import { BASE_PATH } from "../../BASE_PATH"

const Public = ({component: Component}) => {
  const userLogged = false

  if (userLogged) {
    return <Redirect to={BASE_PATH + "/"}/>
  }

  return (
    <Route component={Component}/>
  )
}

export default Public