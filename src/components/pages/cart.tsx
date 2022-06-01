import classes from "../../styles/elements/cupcake/cart-cupcake.module.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import fetchPATCH from "../hooks/fetchPATCH"
import ContentContainer from "../fragments/ContentContainer"
import Cupcake from "../elements/cupcake"
import MenuLink from "../elements/nav-menu/NavMenuLink"
import I_Cupcake from "../elements/cupcake/cupcakeInterface"


const Cart = () => {
  const { cupcakes: cart, totalPrice } = useSelector(({ cartSlice }: any) => cartSlice)

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