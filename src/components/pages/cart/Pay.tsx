import { useEffect, useState } from "react"
import fetchPATCH from "../../hooks/fetchPATCH"
import MenuLink from "../../elements/nav-menu/NavMenuLink"

const Pay = ({ totalPrice }: { totalPrice: number }) => {
  const [money, setMoney] = useState<number | null>(null)

  const pay = () => fetchPATCH("pay", setMoney, { amount: totalPrice })

  useEffect(() => {
    fetchPATCH("money", setMoney)
  }, [])

  return (
    <div>
      <h3 className="title">Costo</h3>
      <div className="pay-container">
        <span>Tu saldo: {money ?? "None"}</span>
        <span>Total a pagar: {totalPrice}</span>
        {
          typeof money === "number" ? <button onClick={pay}>Pagar</button>
          : <>
            <MenuLink to="/login">Inicia sesion</MenuLink><br />
            <MenuLink to="/register">registrate</MenuLink>
          </>
        }
      </div>
    </div>
  )
}

export default Pay