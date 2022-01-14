import { Navigate } from "react-router-dom"

const Public = ({render: Component}) => {
  const userLogged = false

  if (userLogged) {
    return <Navigate to="/"/>
  }

  return <Component/>
}

export default Public