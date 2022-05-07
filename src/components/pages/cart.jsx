import styles from "../../styles/cards/cart-cupcake.module.scss"
import { useSelector } from "react-redux"
import Cupcake from "../cards/Cupcake"
import ContentContainer from "../elements/ContentContainer"

const Cart = () => {

  const cart = useSelector(({ cartSlice }) => cartSlice)
  let totalPrice = 0 

  for (const {price} of cart) {
    totalPrice += price
  }

  return (
    <ContentContainer>
      <section className="cart-cupcakes">
        <h2 className="title">Carrito</h2>

        <div className="container">
          <div>
            <h3 className="title">
              {cart.length ? "Tus cupcakes" : "No tienes ningun cupcake"}
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
          <div>
            <h3 className="title">Costo</h3>
            <div className="pay-container">
              <span>Total: {totalPrice}</span>
            </div>
          </div>
        </div>
      </section>
    </ContentContainer>
  )
}

export default Cart