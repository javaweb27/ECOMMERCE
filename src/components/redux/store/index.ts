import { configureStore } from "@reduxjs/toolkit"
import reducers from "../reducers"

const store = configureStore({
  reducer: reducers,
})

store.subscribe(() => null)

export type T_ReduxRootState = ReturnType<typeof store.getState>

export type T_ReduxDispatch = typeof store.dispatch

export default store
