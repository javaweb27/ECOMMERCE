import styles from "../../styles/cards/cart-cupcake.module.scss"
import { useSelector } from "react-redux"
import Cupcake from "../cards/Cupcake"
import ContentContainer from "../elements/ContentContainer"
import { useEffect, useState } from "react"
import fetchPATCH from "../hooks/fetchPATCH"
import MenuLink from "../elements/MenuLink"


const Cart = () => {
  const { cupcakes: cart, totalPrice } = useSelector(({ cartSlice }) => cartSlice)

  const [money, setMoney] = useState(null)

  const pay = () => fetchPATCH("pay", setMoney, { amount: totalPrice })

  useEffect(() => {
    fetchPATCH("money", setMoney)
  }, [])

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
              <span>Tu saldo: {money ?? "0"}</span>
              <span>Total: {totalPrice}</span>
              {
                money ? <button onClick={pay}>Pagar</button>
                : <>
                  <MenuLink to="/login">Inicia sesion</MenuLink><br />
                  <MenuLink to="/register">registrate</MenuLink>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </ContentContainer>
  )
}

export default Cart