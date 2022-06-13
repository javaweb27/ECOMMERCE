import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { I_ProductPartData, I_ProductPartSell } from "../../elements/products/productInterface"

interface I_State { products: I_ProductPartData[] | null }

const initialState: I_State = { products: null }

const productsSlice = createSlice({
  name: "cupcake",
  initialState,
  reducers: {
    loadProducts(state, { payload }: PayloadAction<I_State>) {
      state.products = payload.products
    },
    sellCupcake(state, { payload }: PayloadAction<I_ProductPartSell>) {
      const cupcake = state.products?.find(prod => prod.id === payload.id)

      if (cupcake) cupcake.sold = payload.sold
    }
  }
})

export const { loadProducts, sellCupcake } = productsSlice.actions
export default productsSlice.reducer