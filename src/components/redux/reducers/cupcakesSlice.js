import { createSlice } from "@reduxjs/toolkit"

const cupcakesSlice = createSlice({
  name: "cupcake",
  initialState: { cupcakes: null, error: true },
  reducers: {
    startInitialState(state, { payload }) {
      state.cupcakes = payload.cupcakes
      state.error = payload.error
    },
    sellCupcake(state, { payload }) {
      const cupcake = state.cupcakes.find(c => c.id === payload.id)
      cupcake.sold = payload.sold
    }
  }
})

export const { startInitialState, sellCupcake } = cupcakesSlice.actions
export default cupcakesSlice.reducer