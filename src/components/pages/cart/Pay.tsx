import { useEffect, useState } from "react"
import { useAppDispatch } from "../../hooks/reduxHooks"
import useCartTrans from "./useCartTrans"
import useLoginRegisterTrans from "../login-register/useLoginRegisterTrans"
import MenuLink from "../../elements/nav-menu/NavMenuLink"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"
import fetchJSON from "../../../fetch/fetchJSON"
import { deleteAuthToken, getAuthToken } from "../../../functions/localStorageHandlers"

const Pay = ({ totalPrice }: { totalPrice: number }) => {
  const t = useCartTrans()

  const tLoginRegister = useLoginRegisterTrans()

  const dispatch = useAppDispatch()

  const [money, setMoney] = useState<number | null>(null)

  const manageMoney = async (endpoint: string, body?: string) => {
    const res = await fetchJSON<{ data: number }>(endpoint, {
      method: "PATCH",
      headers: { authorization: "Bearer " + getAuthToken() },
      body,
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
      <h3 className="title">{t.cost.title}</h3>
      <div className="pay-container">
        <span>
          {t.cost.yourBalance}: {money ?? t.cost.noBalance}
        </span>
        <span>
          {t.cost.totalPrice}: ${totalPrice}
        </span>
        {typeof money === "number" ? (
          <button onClick={pay}>{t.costBtnPay}</button>
        ) : (
          <>
            <MenuLink to="/login">{tLoginRegister.loginBtn}</MenuLink>
            <br />
            <MenuLink to="/register">{tLoginRegister.registerBtn}</MenuLink>
          </>
        )}
      </div>
    </div>
  )
}

export default Pay
