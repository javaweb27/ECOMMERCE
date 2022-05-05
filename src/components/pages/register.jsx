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

    const LOCAL_API = import.meta.env.VITE_LOCAL_API_URL
    const NODE_API = import.meta.env.VITE_NODE_API_URL
    
    const res = await fetch(`${NODE_API || LOCAL_API}register`, config)
    const json = res.json()
    alert(res.ok ? `Email: ${json.email}, Nombre: ${json.name}, Contraseña: ${json.password}` : "ha ocurrido un error al registrarse")
  }

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

          <input type="submit" value="Registrar"/>
        </form>
      </section>
    </ContentContainer>
  )
}

export default RegisterUser
