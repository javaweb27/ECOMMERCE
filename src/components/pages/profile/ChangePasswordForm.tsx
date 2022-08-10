import "./change-password-form.scss"
import { useState } from "react"
import useProfileTrans from "./useProfileTrans"
import Input from "../../elements/input"
import Icon from "../../elements/icon"
import fetchJSON from "../../../fetch/fetchJSON"
import { getAuthToken } from "../../../functions/localStorageHandlers"

const ChangePasswordForm = ({ email }: { email: string }) => {
  const [password, setPassword] = useState<string>("")
  const [hidden, setHidden] = useState<boolean>(true)

  const t = useProfileTrans()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await fetchJSON<any>("change", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })

    if (res !== null) setPassword("")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleClickHidden = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setHidden(oldValue => !oldValue)
  }

  return (
    <form className="change-password-form" onSubmit={handleSubmit}>
      <div className="change-password-container">
        <Input
          i={hidden ? "password" : "text"}
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="new-password"
        >
          {t.newPassword}
        </Input>
        <button className="btn-hidden" onClick={handleClickHidden}>
          <Icon name={hidden ? "eye" : "eye_slash"} width="1.9rem" height="1.9rem" />
        </button>
      </div>

      <button className="btn-change-password">{t.btnChangePassword}</button>
    </form>
  )
}

export default ChangePasswordForm
