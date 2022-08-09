import { useAppDispatch } from "../../hooks/reduxHooks"
import useProfileTrans from "./useProfileTrans"
import { deleteAuthToken } from "../../../functions/localStorageHandlers"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const BtnLogout = () => {
  const dispatch = useAppDispatch()

  const t = useProfileTrans()

  const logout = () => {
    deleteAuthToken()
    dispatch(updateLoginStatus())
  }

  return (
    <button className="btn-logout" onClick={logout}>
      {t["btn-logout"]}
    </button>
  )
}

export default BtnLogout
