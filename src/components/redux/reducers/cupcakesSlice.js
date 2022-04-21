import { createSlice } from "@reduxjs/toolkit"

const cupcakesSlice = createSlice({
  name: "cupcake",
  initialState: { data: [], error: false },
  reducers: {
    startInitialState(state, { payload }) {
      state.data = payload.data
      state.error = payload.error
    },
    sellCupcake(state, { payload }) {
      const cupcake = state.data.find(c => c.id === payload.id)
      cupcake.sold = payload.sold
    }
  }
})

export const { startInitialState, sellCupcake } = cupcakesSlice.actions
export default cupcakesSlice.reducer