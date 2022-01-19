import useFetchPATCH from "../hooks/useFetchPATCH"
import { SELL_CUPCAKE } from "../context/actions"
import styles from "../../styles/elements/button-sell.module.scss"

const ButtonSell= ({ id, sold, cupcakesState, cupcakesDispatch, cartDispatch}) => {
  const sell = () => {
    if (cupcakesState.cupcakes && !cupcakesState.error) {
      useFetchPATCH(id, cupcakesDispatch, cartDispatch)
      return 
    }

    cupcakesDispatch({
      type: SELL_CUPCAKE,
      cupcake: id,
      sold: true,
      error: cupcakesState.error
    })

    cartDispatch({
      type: SELL_CUPCAKE,
      cupcake: {
        id,
        sold: true,
      }
    })
  }

  return (
    <>
      { sold ? 
        <span className={`text ${styles["sold-tag"]}`}>vendido</span> 
        : 
        <button onClick={sell} className={styles["btn-sell"]}>Vender</button>
      }
    </>
  )
}

export default ButtonSell