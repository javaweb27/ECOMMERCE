import styles from "../../styles/elements/button-sell.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { sellCartCupcake } from "../redux/reducers/cartSlice"
import { sellCupcake } from "../redux/reducers/cupcakesSlice"
import fetchPATCH from "../hooks/fetchPATCH"

const ButtonSell = ({ cupcake: { id, sold } }) => {
  const dispatch = useDispatch()
  const cupcakesError = useSelector(({ cupcakesSlice }) => cupcakesSlice.error)

  const dispatchPayload = (sold) => {
    const payload = { id, sold }
    dispatch(sellCupcake(payload))
    dispatch(sellCartCupcake(payload))
  }

  const sell = () => {
    if (!cupcakesError) {
      fetchPATCH(id, dispatchPayload)
    }
    else {
      dispatchPayload(true)
    }
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