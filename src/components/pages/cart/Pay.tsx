import { useEffect, useState } from "react"
import MenuLink from "../../elements/nav-menu/NavMenuLink"
import { useDispatch } from "react-redux"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"
import fetchJSON from "../../../fetch/fetchJSON"
import { deleteAuthToken, getAuthToken } from "../../../functions/localStorageHandlers"

const Pay = ({ totalPrice }: { totalPrice: number }) => {
  const dispatch = useDispatch()

  const [money, setMoney] = useState<number | null>(null)

  const manageMoney = async (endpoint: string, body?: string) => {
    const res = await fetchJSON<{ data: number }>(endpoint, {
      method: "PATCH",
      headers: { "authorization": "Bearer " + getAuthToken() },
      body: body
    })

    if (res) return setMoney(res.data)

    deleteAuthToken()
    dispatch(updateLoginStatus())
  }

  const pay = () => manageMoney("pay", JSON.stringify({ amount: totalPrice }))

  useEffect(() => {
    manageMoney("money")
  }, [])

  return (
    <div>
      <h3 className="title">Costo</h3>
      <div className="pay-container">
        <span>Tu saldo: {money ?? "None"}</span>
        <span>Total a pagar: ${totalPrice}</span>
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