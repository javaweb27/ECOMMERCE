import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  I_ProdPartCartAdd,
  I_ProdPartCartRemove,
} from "../../elements/products/prodInterface"

interface I_State {
  products: I_ProdPartCartAdd[]
  totalPrice: number
}

const initialState: I_State = { products: [], totalPrice: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<I_ProdPartCartAdd>) {
      const found = state.products.find(prod => prod.id === payload.id)
      if (found) {
        found.qty += payload.qty
      } else {
        state.products.push(payload)
      }
      state.totalPrice = calcTotalPrice(state.products)
    },
    removeFromCart(state, { payload }: PayloadAction<I_ProdPartCartRemove>) {
      const found = state.products.find(prod => prod.id === payload.id)

      if (!found) return

      found.qty -= payload.qty

      if (found.qty <= 0) {
        state.products = state.products.filter(c => c.id !== payload.id)
      }

      state.totalPrice = calcTotalPrice(state.products)
    },
  },
})

function calcTotalPrice(products: I_ProdPartCartAdd[]) {
  let totalPrice = 0

  for (const { price, qty } of products) {
    totalPrice += price * qty
  }

  return totalPrice
}

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
