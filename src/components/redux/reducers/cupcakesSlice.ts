import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import I_Cupcake, { I_CupcakePartToSell } from "../../elements/cupcake/cupcakeInterface"

interface I_State { cupcakes: I_Cupcake[] | null, error: boolean }

const initialState: I_State = { cupcakes: null, error: true }

const cupcakesSlice = createSlice({
  name: "cupcake",
  initialState,
  reducers: {
    startInitialState(state, { payload }: PayloadAction<I_State>) {
      state.cupcakes = payload.cupcakes
      state.error = payload.error
    },
    sellCupcake(state, { payload }: PayloadAction<I_CupcakePartToSell>) {
      const cupcake = state.cupcakes?.find((c: I_Cupcake) => c.id === payload.id)

      if (cupcake) cupcake.sold = payload.sold
    }
  }
})

export const { startInitialState, sellCupcake } = cupcakesSlice.actions
export default cupcakesSlice.reducer