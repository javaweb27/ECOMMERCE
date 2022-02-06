import { SELL_CUPCAKE, START_INITIAL_STATE } from "../actionTypes"

const initialState = {data: [], error: false}

const CupcakesReducer = (state = initialState, {type, cupcakes, cupcake, error}) => {

  if (type === START_INITIAL_STATE) {
    return {
      data: cupcakes,
      error: error
    }
  }

  if (type === SELL_CUPCAKE) {
    return {
      data: state.data.map(c => {
        if (c.id === cupcake.id) {
          c.sold = cupcake.sold
        }
        return c
      }),
      error: state.error
    }
  }

  return state
}

export default CupcakesReducer