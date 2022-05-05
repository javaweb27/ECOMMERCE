import { useState } from "react"
import { Navigate } from "react-router-dom"
import ContentContainer from "../elements/ContentContainer"
import Input from "../elements/Input"
import fetchPOST from "../hooks/fetchPOST"

const LoginUser = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [login, setLogin] = useState({ isLogged: false, isValidData: true })

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async e => {
    e.preventDefault()

    const json = await fetchPOST("login", data)

    if (json?.token) {
      localStorage.setItem("token", json.token ?? null)
      setLogin({ isLogged: true, isValidData: true })
    }
    else {
      setLogin({ ...login, isValidData: false })
    }
  }

  if (login.isLogged) return <Navigate to="/" />

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

          <p className={`error-message${login.isValidData ? "" : " is-active"}`}>Uno o ambos datos son incorrectos</p>

          <input type="submit" value="Ingresar" />
        </form>
      </section>
    </ContentContainer>
  )
}

export default LoginUser
