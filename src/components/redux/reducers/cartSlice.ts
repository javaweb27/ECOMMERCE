import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { I_ProductPartData } from "../../elements/products/productInterface";

interface I_State { products: I_ProductPartData[]; totalPrice: number }

const initialState: I_State = { products: [], totalPrice: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<I_ProductPartData>) {
      state.products.push(payload)
      state.totalPrice = calcTotalPrice(state.products)
    },
    removeFromCart(state, { payload }: PayloadAction<number>) {
      state.products = state.products.filter((c: any) => c.id !== payload)
      state.totalPrice = calcTotalPrice(state.products)
    }
  }
})

function calcTotalPrice(products: I_ProductPartData[]) {
  let totalPrice = 0

  for (const { price } of products) {
    totalPrice += price
  }

  return totalPrice
}

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer