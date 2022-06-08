import classes from "./btn-sell.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { sellCartCupcake } from "../../redux/reducers/cartSlice"
import { sellCupcake } from "../../redux/reducers/loadedProductsSlice"
import fetchPATCH from "../../hooks/fetchPATCH"
import { I_ProductPartSell } from "./productInterface"

const BtnSell = ({ id, sold }: I_ProductPartSell) => {
  const dispatch = useDispatch()
  const cupcakesError: boolean = useSelector(({ loadedProductsSlice }: any) => loadedProductsSlice.error)

  const dispatchPayload = (sold: boolean) => {
    const payload = { id, sold }
    dispatch(sellCupcake(payload))
    dispatch(sellCartCupcake(payload))
  }

  const sell = () => {
    if (!cupcakesError) {
      fetchPATCH("cupcakes/" + id, dispatchPayload, { sold: true })
    }
    else {
      dispatchPayload(true)
    }
  }

  if (sold) {
    return <span className={classes["sold-tag"]}>Vendido</span>
  }

  return <button onClick={sell} className={classes["btn-sell"]}>Vender</button>
}

export default BtnSell