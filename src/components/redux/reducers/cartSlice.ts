import { createSlice } from "@reduxjs/toolkit"

interface I_State { cupcakes: any[]; totalPrice: number }

const initialState: I_State = { cupcakes: [], totalPrice: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.cupcakes.push(payload)
      state.totalPrice = calcTotalPrice(state.cupcakes)
    },
    removeFromCart(state, { payload }) {
      state.cupcakes = state.cupcakes.filter((c: any) => c.id !== payload)
      state.totalPrice = calcTotalPrice(state.cupcakes)
    },
    sellCartCupcake(state, { payload }) {
      const cupcake: any = state.cupcakes.find((c: any) => c.id === payload.id)

      if (cupcake) {
        cupcake.sold = payload.sold
      }
    }
  }
})

function calcTotalPrice(cupcakes: any) {
  let totalPrice = 0

  for (const { price } of cupcakes) {
    totalPrice += price
  }

  return totalPrice
}

export const { addToCart, removeFromCart, sellCartCupcake } = cartSlice.actions
export default cartSlice.reducer