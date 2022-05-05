import { useState } from "react"
import { Navigate } from "react-router-dom"
import ContentContainer from "../elements/ContentContainer"
import Input from "../elements/Input"
import fetchPOST from "../hooks/fetchPOST"

const RegisterUser = () => {

  const [data, setData] = useState({ name: "", email: "", password: "", repeatedPassword: "" })
  const [register, setRegister] = useState({ isNewUser: false, isValidData: true })

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async e => {
    e.preventDefault()

    if (data.password !== data.repeatedPassword) return

    const json = await fetchPOST("register", data)

    if (json) {
      setRegister({ isNewUser: true, isValidData: true })
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
        <form action="" onSubmit={submit} className="forms">
          <Input type="text" name="name" value={data.name} onChange={changeData}>
            Nombre de usuario
          </Input>

          <Input type="email" name="email" value={data.email} onChange={changeData}>
            Correo electronico
          </Input>

          <Input type="password" name="password" value={data.password} onChange={changeData}>
            Contraseña
          </Input>

          <Input type="password" name="repeatedPassword" value={data.repeatedPassword} onChange={changeData}>
            Repite la contraseña
          </Input>

          <p className={`error-message${data.password !== data.repeatedPassword ? " is-active" : ""}`}>Las contraseñas tienen que ser iguales</p>
          <p className={`error-message${register.isValidData ? "" : " is-active"}`}>Ya existe un usuario registrado con este correo</p>

          <input type="submit" value="Registrar" />
        </form>
      </section>
    </ContentContainer>
  )
}

export default RegisterUser
