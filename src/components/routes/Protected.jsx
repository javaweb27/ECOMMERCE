import { Navigate } from "react-router-dom"
import { BASE_PATH } from "../../BASE_PATH"

const Protected = ({render: Component}) => {

  const userLogged = true

  if (!userLogged) {
    return <Navigate to={BASE_PATH + "/login"}/>
  }

  return <Component/>
}

export default Protected