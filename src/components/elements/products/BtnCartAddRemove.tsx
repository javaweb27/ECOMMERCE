import classes from "./btn-cart-add-remove.module.scss"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { I_ProdPartData } from "./prodInterface"
import { addToCart, removeFromCart } from "../../redux/reducers/cartSlice"

interface I_Props {
  data: I_ProdPartData,
  isCompact: boolean
}

const BtnCartAddRemove = ({ data, isCompact }: I_Props) => {
  const dispatch = useAppDispatch()

  const cart = useAppSelector(({ cart }) => cart.products)
  
  const [qty, setQty] = useState<number>(1)

  const found = isCompact ? cart.find(c => c.id === data.id) : null

  const add = () => dispatch(addToCart({
    ...data,
    qty: qty
  }))

  const remove = () => dispatch(removeFromCart({
    id: data.id,
    qty: qty
  }))

  const changeQty = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (value < 1 || !value) return setQty(1)
    if (value > 100) return setQty(100)

    setQty(value)
  }

  return <div>
    {
      found && <div>
        <span>Cantidad: {found.qty} / ${found.qty * found.price} </span>
      </div>
    }

    <div className={classes.qtyContainer}>
      <button className={classes.btnQty} onClick={() => qty < 100 && setQty(qty + 1)}>+</button>

      <input className={classes.qty} onChange={changeQty} value={qty} type="number" />

      <button className={classes.btnQty} onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
    </div>

    <button className={classes.btnAdd} onClick={add}>Agregar</button>
    <button className={classes.btnRemove} onClick={remove}>Remover</button>
  </div>
}

export default BtnCartAddRemove