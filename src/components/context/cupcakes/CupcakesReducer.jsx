import { SELL_CUPCAKE, START_INITIAL_STATE } from "../actions"

// el parametro desestructurado "cupcake" es la propiedad "id"(numero) de un cupcake
const CupcakesReducer = (state, {type, cupcakes, error, cupcake, sold}) => {

  if (type === START_INITIAL_STATE) {
    return {
      cupcakes,
      error
    }
  }

  if (type === SELL_CUPCAKE) {
    return {
      cupcakes: state.cupcakes.map(c => {
        if (c.id === cupcake) {
          c.sold = sold
          return c
        }

        return c
      })
    }
  }

  return state
}

export default CupcakesReducer