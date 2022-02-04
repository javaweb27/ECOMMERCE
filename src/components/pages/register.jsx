import { useState } from "react"
import ContentContainer from "../elements/ContentContainer"
import Input from "../elements/Input"

const RegisterUser = () => {

  const [data, setData] = useState({name: "", email: "", password: "", repeatedPassword: ""})

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async e => {
    e.preventDefault()
    if (data.password !== data.repeatedPassword) return

    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }

    await fetch(`http://localhost:3050/register`, config)
  }

  return (
    <ContentContainer>
      <section>
        <h1 className="title">Registrar usuario</h1>
        <form action="" onSubmit={submit} className="register">
          <Input type="text" name="name" value={data.name} onChange={changeData}>
            Escribe tu nombre de usuario
          </Input>

          <Input type="email" name="email" value={data.email} onChange={changeData}>
            Escribe tu correo
          </Input>

          <Input type="password" name="password" value={data.password} onChange={changeData}>
            Escribe tu contraseña
          </Input>

          <Input type="password" name="repeatedPassword" value={data.repeatedPassword} onChange={changeData}>
            Repite la contraseña
          </Input>

          <p className={`error-message${data.password !== data.repeatedPassword ? " is-active" : ""}`}>Las contraseñas tienen que ser iguales</p>

          <Input type="submit" value="Registrar"/>
        </form>
      </section>
    </ContentContainer>
  )
}

export default RegisterUser
