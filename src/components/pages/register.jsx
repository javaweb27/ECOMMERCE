import { useState } from "react"
import ContentContainer from "../elements/ContentContainer"
import Input from "../elements/Input"

const RegisterUser = () => {

  const [data, setData] = useState({name: "", email: "", password: ""})

  const [passwordRepeated, setPasswordRepeated] = useState("")

  const [passwordError, setPasswordError] = useState(false)

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    if (passwordRepeated && passwordRepeated !== e.target.value) return setPasswordError(true)

    setPasswordError(false)
  }

  const checkPassword = e => {
    setPasswordRepeated(e.target.value)

    if (data.password !== e.target.value) return setPasswordError(true)

    setPasswordError(false)
  }

  const submit = async e => {
    e.preventDefault()
    if (!(data.password === passwordRepeated)) return
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }

    const resp = await fetch(`http://localhost:3050/register`, config)
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

          <Input type="password" name="repeat-password" value={passwordRepeated} onChange={checkPassword}>
            Repite la contraseña
          </Input>

          <p className={`error-message${passwordError ? " is-active" : ""}`}>Las contraseñas tienen que ser iguales</p>

          <Input type="submit" value="Registrar"/>
        </form>
      </section>
    </ContentContainer>
  )
}

export default RegisterUser