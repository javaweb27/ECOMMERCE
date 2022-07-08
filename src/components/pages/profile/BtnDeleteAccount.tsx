import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import fetchJSON from "../../../fetch/fetchJSON"
import { deleteAuthToken, getAuthToken } from "../../../functions/localStorageHandlers"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const BtnDeleteAccount = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const logout = () => {
    fetchJSON("delete", {
      method: "DELETE",
      headers: { "authorization": "Bearer " + getAuthToken() },
    })
    
    deleteAuthToken()
    dispatch(updateLoginStatus())
    navigate("/register")
  }

  return <button className="btn-logout btn-delete-account" onClick={logout}>Eliminar cuenta</button>
}

export default BtnDeleteAccount