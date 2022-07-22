import "./index.scss"
import { useAppSelector } from "../../hooks/reduxHooks"
import useCartTrans from "./useCartTrans"
import ContentContainer from "../../fragments/ContentContainer"
import Pay from "./Pay"
import Products from "../../elements/products"

const Cart = () => {
  const t = useCartTrans()
  const { products, totalPrice } = useAppSelector(({ cart }) => cart)

  return (
    <ContentContainer>
      <section className="cart-cupcakes">
        <h2 className="title">{t[("title")]}</h2>

        <div className="container">
          <div>
            <h3 className="title">
              {t[("prods-added")][(totalPrice > 0 ? "title" : "no-prods")]}
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