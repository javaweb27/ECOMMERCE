import { useState } from "react"
import ContentContainer from "../elements/ContentContainer"
import Input from "../elements/Input"
import fetchPOST from "../hooks/fetchPOST"

const LoginUser = () => {
  const [data, setData] = useState({ email: "", password: "" })

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async e => {
    e.preventDefault()

    const json = await fetchPOST("login", data)
    alert(json ? `Token de autenticacion: ${json.token}` : "el usuario no existe o la contraseña es incorrecta")
    localStorage.setItem("token", json?.token ?? null)
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

          <input type="submit" value="Ingresar" />
        </form>
      </section>
    </ContentContainer>
  )
}

export default LoginUser
