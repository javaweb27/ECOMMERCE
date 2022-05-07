import styles from "../../styles/cards/cart-cupcake.module.scss"
import { useSelector } from "react-redux"
import Cupcake from "../cards/Cupcake"
import ContentContainer from "../elements/ContentContainer"

const Cart = () => {

  const cart = useSelector(({ cartSlice }) => cartSlice)

  return (
    <ContentContainer>
      <section className="cart-cupcakes">
        <h2 className="title">Carrito</h2>

        <div className="container">
          <div>
            <h3 className="title">
              {cart.length ? "Cupcakes del carrito" : "No tienes cupcakes en el carrito"}
            </h3>
            <div className="cupcakes-container">
              {
                cart.map(({ id, description, img, flavor, color, price, sold }) => {
                  return (
                    <Cupcake
                      styles={styles}
                      key={id}
                      id={id}
                      description={description}
                      img={img}
                      flavor={flavor}
                      color={color}
                      price={price}
                      sold={sold}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </ContentContainer>
  )
}

export default Cart