import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { I_ProductPartData, I_ProductPartSell } from "../../elements/products/productInterface"

interface I_State { products: I_ProductPartData[] | null, error: boolean }

const initialState: I_State = { products: null, error: true }

const loadedProductsSlice = createSlice({
  name: "cupcake",
  initialState,
  reducers: {
    startInitialState(state, { payload }: PayloadAction<I_State>) {
      state.products = payload.products
      state.error = payload.error
    },
    sellCupcake(state, { payload }: PayloadAction<I_ProductPartSell>) {
      const cupcake = state.products?.find(prod => prod.id === payload.id)

      if (cupcake) cupcake.sold = payload.sold
    }
  }
})

export const { startInitialState, sellCupcake } = loadedProductsSlice.actions
export default loadedProductsSlice.reducer