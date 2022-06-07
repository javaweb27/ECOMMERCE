import "./index.scss"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import verifyAllowedCharacters from "../../../functions/areValidCharacters"
import ContentContainer from "../../fragments/ContentContainer"
import Input from "../../elements/input"
import fetchPOST from "../../hooks/fetchPOST"
import { emailRegex } from "../../../functions/regex"

const RegisterUser = () => {

  const [data, setData] = useState({ name: "", email: "", password: "", repeatedPassword: "" })
  const [register, setRegister] = useState({ isNewUser: false, isValidData: true, areValidCharacters: true })

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!verifyAllowedCharacters(data.name) || !emailRegex.test(data.email)) {
      setRegister({
        ...register,
        areValidCharacters: false
      })
      return
    }
    else {
      setRegister({
        ...register,
        areValidCharacters: true
      })
    }

    if (data.password !== data.repeatedPassword) return

    const json = await fetchPOST("register", data)

    if (json) {
      setRegister({ ...register, isNewUser: true, isValidData: true })
    }
    else {
      setRegister({ ...register, isValidData: false })
    }
  }

  if (register.isNewUser) return <Navigate to="/login" />

  return (
    <ContentContainer>
      <section className="register">
        <h1 className="title">Registrar usuario</h1>
        <form action="" onSubmit={submit}>
          <Input i="text" name="name" value={data.name} onChange={changeData} placeholder="Tu nombre de usuario">
            Nombre de usuario
          </Input>

          <Input i="email" name="email" value={data.email} onChange={changeData} placeholder="ejemplo@dominio.com">
            Correo electronico
          </Input>

          <Input i="password" name="password" value={data.password} onChange={changeData}>
            Contraseña
          </Input>

          <Input i="password" name="repeatedPassword" value={data.repeatedPassword} onChange={changeData}>
            Repite la contraseña
          </Input>

          <button className="btn-submit">Ingresar</button>
        </form>
        <p className={`error-message${data.password !== data.repeatedPassword ? " is-active" : ""}`}>Las contraseñas tienen que ser iguales</p>
        <p className={`error-message${register.areValidCharacters ? "" : " is-active"}`}>EL nombre o el email tiene caracteres invalidos</p>
        <p className={`error-message${register.isValidData ? "" : " is-active"}`}>Ya existe un usuario registrado con este correo</p>
      </section>
    </ContentContainer>
  )
}

export default RegisterUser
