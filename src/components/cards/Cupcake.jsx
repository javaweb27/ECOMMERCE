import { number, string } from "prop-types"
import ButtonSell from "../elements/ButtonSell"
import ButtonAddRemoveFromCart from "../elements/ButtonAddRemoveFromCart"

const Cupcake = ({ styles, id, description, img, flavor, color, price, sold }) => {

  return (
    <article className={styles.cupcake}>
      <img className={sold ? styles.sold : null} src={img} alt={flavor} loading="lazy"/>
      <div className={styles.description}>
        <p className="text">{description}</p>
        <span className="text">Color: {color}</span>
        <span className="text">Precio: {price}</span>
      </div>

      <div className={styles.buttons}>
        <ButtonSell cupcake={{id, sold}}/>

        <ButtonAddRemoveFromCart cupcake={{ id, description, img, flavor, color, price, sold }}/>
      </div>
    </article>
  )
} 

Cupcake.propTypes = {
  price: number,
  color: string.isRequired,
  description: string.isRequired,
  flavor: string.isRequired,
  img: string
}

Cupcake.defaultProps = {
  img: "https://images.unsplash.com/photo-1455731657401-43502b7c1ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  price: 0
}

export default Cupcake
