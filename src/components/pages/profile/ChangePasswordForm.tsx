import "./change-password-form.scss"
import { useState } from "react"
import fetchPATCH from "../../hooks/fetchPATCH"
import Input from "../../elements/input"
import Icon from "../../elements/icon"

const ChangePasswordForm = ({ email }: { email: string }) => {
  const [password, setPassword] = useState<string>("")
  const [hidden, setHidden] = useState<boolean>(true)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchPATCH("change", () => { setPassword("") }, () => null, {
      password: password,
      email: email
    })
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
        <Input i={hidden ? "password" : "text"} name="password" value={password} onChange={handleChange} autoComplete="new-password">
          Nueva Contraseña
        </Input>
        <button className="btn-hidden" onClick={handleClickHidden}>
          <Icon name={hidden ? "eye" : "eye_slash"} width="1.9rem" height="1.9rem" />
        </button>
      </div>

      <button className="btn-change-password" >Cambiar contraseña</button>
    </form>
  )
}

export default ChangePasswordForm