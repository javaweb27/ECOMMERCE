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

    const LOCAL_API = import.meta.env.VITE_LOCAL_API_URL
    const NODE_API = import.meta.env.VITE_NODE_API_URL
  
    const res = await fetch(`${NODE_API || LOCAL_API}login`, config)
    const json = await resp.json()

    alert(res.ok ? `Email: ${json.email}, Nombre: ${json.name}, Contraseña: ${json.password}` : "ha ocurrido un error al iniciar sesion")
    localStorage.setItem("token", json.token ?? null)
  }

  return (
    <ContentContainer>
      <section className="login">
        <h1 className="title">Iniciar sesion</h1>
        <form action="" onSubmit={submit} className="forms">
          <Input type="email" name="email" value={data.email} onChange={changeData}>
            Escribe tu correo
          </Input>

          <Input type="password" name="password" value={data.password} onChange={changeData}>
            Escribe tu contraseña
          </Input>

          <input type="submit" value="Ingresar"/>
        </form>
      </section>
    </ContentContainer>
  )
}

export default LoginUser
