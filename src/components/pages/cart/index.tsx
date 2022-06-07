import "./index.scss"
import classes from "../../elements/cupcake/cart-cupcake.module.scss"
import { useSelector } from "react-redux"
import ContentContainer from "../../fragments/ContentContainer"
import Cupcake from "../../elements/cupcake"
import I_Cupcake from "../../elements/cupcake/cupcakeInterface"
import Pay from "./Pay"

const Cart = () => {
  const { cupcakes: cart, totalPrice } = useSelector(({ cartSlice }: any) => cartSlice)

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
                cart.map(({ id, description, img, flavor, color, price, sold }: I_Cupcake) => {
                  return (
                    <Cupcake
                      classes={classes}
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
          <Pay totalPrice={totalPrice}/>
        </div>
      </section>
    </ContentContainer>
  )
}

export default Cart