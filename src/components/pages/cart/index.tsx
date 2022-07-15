import "./index.scss"
import { useAppSelector } from "../../hooks/reduxHooks"
import ContentContainer from "../../fragments/ContentContainer"
import Pay from "./Pay"
import Products from "../../elements/products"

const Cart = () => {
  const { products, totalPrice } = useAppSelector(({ cart }) => cart)

  return (
    <ContentContainer>
      <section className="cart-cupcakes">
        <h2 className="title">Carrito</h2>

        <div className="container">
          <div>
            <h3 className="title">
              {totalPrice > 0 ? "Tus cupcakes" : "No tienes ningun cupcake"}
            </h3>
            <Products products={products} compact />
          </div>

          <Pay totalPrice={totalPrice} />
        </div>
      </section>
    </ContentContainer>
  )
}

export default Cart