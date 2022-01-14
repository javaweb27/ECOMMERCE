import { Navigate } from "react-router-dom"
import { BASE_PATH } from "../../BASE_PATH"

const Public = ({render: Component}) => {
  const userLogged = false

  if (userLogged) {
    return <Navigate to={BASE_PATH + "/"}/>
  }

  return <Component/>
}

export default Public