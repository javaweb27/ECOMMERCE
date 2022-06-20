import { createSlice } from "@reduxjs/toolkit"
import { getAuthToken } from "../../../functions/localStorageHandlers"

interface I_State { isLogged: boolean }

const initialState: I_State = { isLogged: Boolean(getAuthToken()) }

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    updateLoginStatus(state) {
      state.isLogged = Boolean(getAuthToken())
    }
  }
})

export const { updateLoginStatus } = loginStatusSlice.actions
export default loginStatusSlice.reducer