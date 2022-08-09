import { createSlice } from "@reduxjs/toolkit"
import { deleteAuthToken, getAuthToken } from "../../../functions/localStorageHandlers"
import decodeToken from "../../../functions/decodeToken"

interface I_UserData {
  name: string
  email: string
  endDate: number
}

interface I_State {
  isLogged: boolean
  loginData: I_UserData | null
}

interface I_DecodedToken {
  userData: I_UserData
}

const loginData = getDataFromToken()

const initialState: I_State = { isLogged: Boolean(loginData), loginData }

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    updateLoginStatus(state) {
      state.loginData = getDataFromToken()
      state.isLogged = Boolean(getAuthToken())
    },
  },
})

function getDataFromToken() {
  const decoded = decodeToken<I_DecodedToken>()

  if (!decoded) {
    deleteAuthToken()
    return null
  }

  try {
    return {
      name: atob(decoded.userData.name),
      email: atob(decoded.userData.email),
      endDate: decoded.userData.endDate,
    }
  } catch {
    deleteAuthToken()
    return null
  }
}

export const { updateLoginStatus } = loginStatusSlice.actions
export default loginStatusSlice.reducer
