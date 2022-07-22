import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/reduxHooks"
import useProfileTrans from "./useProfileTrans"
import fetchJSON from "../../../fetch/fetchJSON"
import { deleteAuthToken, getAuthToken } from "../../../functions/localStorageHandlers"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const BtnDeleteAccount = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const t = useProfileTrans()

  const logout = () => {
    fetchJSON("delete", {
      method: "DELETE",
      headers: { "authorization": "Bearer " + getAuthToken() },
    })
    
    deleteAuthToken()
    dispatch(updateLoginStatus())
    navigate("/register")
  }

  return <button className="btn-logout btn-delete-account" onClick={logout}>{t["btn-delete-account"]}</button>
}

export default BtnDeleteAccount