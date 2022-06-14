import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { I_ProductPartData } from "../../elements/products/productInterface"

interface I_State { products: I_ProductPartData[] | null }

const initialState: I_State = { products: null }

const productsSlice = createSlice({
  name: "cupcake",
  initialState,
  reducers: {
    loadProducts(state, { payload }: PayloadAction<I_State>) {
      state.products = payload.products
    }
  }
})

export const { loadProducts } = productsSlice.actions
export default productsSlice.reducer