import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState : [],
  reducers: {
    addToCart(state, { payload }) {
      state.push(payload)
    },
    removeFromCart(state, { payload }) {
      return state.filter(c => c.id !== payload)
    },
    sellCartCupcake(state, { payload }) {
      const cupcake = state.find(c => c.id === payload.id)

      if (cupcake) {
        cupcake.sold = payload.sold
      }
    }
  }
})

export const { addToCart, removeFromCart, sellCartCupcake } = cartSlice.actions
export default cartSlice.reducer