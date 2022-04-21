import styles from "../../styles/elements/button-sell.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { sellCartCupcake } from "../redux/reducers/cartSlice"
import { sellCupcake } from "../redux/reducers/cupcakesSlice"
import useFetchPATCH from "../hooks/useFetchPATCH"

const ButtonSell= ({ cupcake }) => {
  const dispatch = useDispatch()
  const dataError = useSelector(({cupcakesSlice}) => cupcakesSlice.error)

  const sell = () => {
    if (!dataError) {
      useFetchPATCH(cupcake.id, dispatch)
    }
    else {
      dispatch(sellCupcake({
        id: cupcake.id,
        sold: true
      }))
      dispatch(sellCartCupcake({
        id: cupcake.id,
        sold: true
      }))
    }
  }

  return (
    <>
      { cupcake.sold ? 
        <span className={`text ${styles["sold-tag"]}`}>vendido</span> 
        : 
        <button onClick={sell} className={styles["btn-sell"]}>Vender</button>
      }
    </>
  )
}

export default ButtonSell