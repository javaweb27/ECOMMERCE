import { useContext } from "react"
import Cupcake from "../cards/Cupcake"
import CartContext from "../context/cart/CartContext"

const CartCupcakes = () => {
  const [state] = useContext(CartContext)
  
  return (
    <section className="cart-cupcakes">
      <h2 className="title">Cupcakes del carrito</h2>
      <div className="container">
        {
          state.cart.map(({ id, description, img, flavor, color, price, sold }) => {
            return (
              <Cupcake
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
    </section>
  )
}

export default CartCupcakes