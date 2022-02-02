import { useState } from "react"
import ContentContainer from "../elements/ContentContainer"
import Input from "../elements/Input"

const LoginUser = () => {
  const [data, setData] = useState({email: "", password: ""})

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async e => {
    e.preventDefault()
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }

    const resp = await fetch(`http://localhost:3050/login`, config)
    const json = await resp.json()

    localStorage.setItem("token", json.token ?? null)
  }

  return (
    <ContentContainer>
      <section>
        <h1 className="title">Iniciar sesion</h1>
        <form action="" onSubmit={submit} className="login">
          <Input type="email" name="email" value={data.email} onChange={changeData}>
            Escribe tu correo
          </Input>

          <Input type="password" name="password" value={data.password} onChange={changeData}>
            Escribe tu contraseña
          </Input>

          <Input type="submit" value="Ingresar"/>
        </form>
      </section>
    </ContentContainer>
  )
}

export default LoginUser
