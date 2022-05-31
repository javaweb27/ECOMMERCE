import { createSlice } from "@reduxjs/toolkit"

interface I_State { cupcakes: any[] | null, error: boolean }

const initialState: I_State = { cupcakes: null, error: true }

const cupcakesSlice = createSlice({
  name: "cupcake",
  initialState,
  reducers: {
    startInitialState(state, { payload }) {
      state.cupcakes = payload.cupcakes
      state.error = payload.error
    },
    sellCupcake(state, { payload }) {
      const cupcake: any = state.cupcakes?.find((c: any) => c.id === payload.id)
      cupcake.sold = payload.sold
    }
  }
})

export const { startInitialState, sellCupcake } = cupcakesSlice.actions
export default cupcakesSlice.reducer