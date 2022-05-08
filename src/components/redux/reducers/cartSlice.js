import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: { cupcakes: [], totalPrice: 0 },
  reducers: {
    addToCart(state, { payload }) {
      state.cupcakes.push(payload)
      state.totalPrice = calcTotalPrice(state.cupcakes)
    },
    removeFromCart(state, { payload }) {
      state.cupcakes = state.cupcakes.filter(c => c.id !== payload)
      state.totalPrice = calcTotalPrice(state.cupcakes)
    },
    sellCartCupcake(state, { payload }) {
      const cupcake = state.cupcakes.find(c => c.id === payload.id)

      if (cupcake) {
        cupcake.sold = payload.sold
      }
    }
  }
})

function calcTotalPrice(cupcakes) {
  let totalPrice = 0

  for (const { price } of cupcakes) {
    totalPrice += price
  }

  return totalPrice
}

export const { addToCart, removeFromCart, sellCartCupcake } = cartSlice.actions
export default cartSlice.reducer