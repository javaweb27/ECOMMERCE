import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import I_Cupcake, { I_CupcakePartToSell } from "../../elements/cupcake/cupcakeInterface";

interface I_State { cupcakes: I_Cupcake[]; totalPrice: number }

const initialState: I_State = { cupcakes: [], totalPrice: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<I_Cupcake>) {
      state.cupcakes.push(payload)
      state.totalPrice = calcTotalPrice(state.cupcakes)
    },
    removeFromCart(state, { payload }: PayloadAction<number>) {
      state.cupcakes = state.cupcakes.filter((c: any) => c.id !== payload)
      state.totalPrice = calcTotalPrice(state.cupcakes)
    },
    sellCartCupcake(state, { payload }: PayloadAction<I_CupcakePartToSell>) {
      const cupcake = state.cupcakes.find((c: I_Cupcake) => c.id === payload.id)

      if (cupcake) cupcake.sold = payload.sold
    }
  }
})

function calcTotalPrice(cupcakes: I_Cupcake[]) {
  let totalPrice = 0

  for (const { price } of cupcakes) {
    totalPrice += price
  }

  return totalPrice
}

export const { addToCart, removeFromCart, sellCartCupcake } = cartSlice.actions
export default cartSlice.reducer