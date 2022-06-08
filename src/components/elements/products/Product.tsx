import BtnSell from "./BtnSell"
import BtnAddRemoveFromCart from "./BtnAddRemoveFromCart"
import I_Product from "./productInterface"

const Prod = ({
  classes,
  id,
  description,
  img,
  flavor,
  color,
  price,
  sold
}: I_Product) => {

  return (
    <article className={classes.product}>
      <img className={sold ? classes.sold : ""} src={img} alt={flavor} loading="lazy" />
      <div className={classes.container}>
        <div className={classes.details}>
          <p>{description}</p>
          <span>Color: {color}</span>
          <span>Precio: {price}</span>
        </div>

        <div className={classes.buttons}>
          <BtnSell {...{ id, sold }} />
          <BtnAddRemoveFromCart {...{ id, description, img, flavor, color, price, sold }} />
        </div>
      </div>
    </article>
  )
}

export default Prod
