import classes from "../../../styles/elements/cupcake/btn-sell.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { sellCartCupcake } from "../../redux/reducers/cartSlice"
import { sellCupcake } from "../../redux/reducers/cupcakesSlice"
import fetchPATCH from "../../hooks/fetchPATCH"
import { I_CupcakePartToSell } from "./cupcakeInterface"

const BtnSell = ({ id, sold }: I_CupcakePartToSell) => {
  const dispatch = useDispatch()
  const cupcakesError: boolean = useSelector(({ cupcakesSlice }: any) => cupcakesSlice.error)

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