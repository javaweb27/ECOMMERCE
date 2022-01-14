import { Navigate } from "react-router-dom"

const Protected = ({render: Component}) => {

  const userLogged = true

  if (!userLogged) {
    return <Navigate to="/login"/>
  }

  return <Component/>
}

export default Protected