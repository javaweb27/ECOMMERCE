import { useAppDispatch } from "../../hooks/reduxHooks"
import { deleteAuthToken } from "../../../functions/localStorageHandlers"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const BtnLogout = () => {
  const dispatch = useAppDispatch()

  const logout = () => {
    deleteAuthToken()
    dispatch(updateLoginStatus())
  }

  return <button className="btn-logout" onClick={logout}>Cerrar sesión</button>
}

export default BtnLogout