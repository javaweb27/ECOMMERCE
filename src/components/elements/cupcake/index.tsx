import BtnSell from "./BtnSell"
import BtnAddRemoveFromCart from "./BtnAddRemoveFromCart"
import I_Cupcake from "./cupcakeInterface"

interface I_Props extends I_Cupcake {
  classes: CSSModuleClasses
}

const Cupcake = ({
  classes,
  id,
  description,
  img,
  flavor,
  color,
  price,
  sold
}: I_Props) => {

  return (
    <article className={classes.cupcake}>
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

export default Cupcake
