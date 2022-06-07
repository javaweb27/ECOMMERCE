import "./index.scss"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import ContentContainer from "../../fragments/ContentContainer"
import Input from "../../elements/input"
import fetchPOST from "../../hooks/fetchPOST"

const LoginUser = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [login, setLogin] = useState({ isLogged: false, isValidData: true })

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <form action="" onSubmit={submit}>
          <Input i="email" name="email" value={data.email} onChange={changeData}>
            Escribe tu correo
          </Input>

          <Input i="password" name="password" value={data.password} onChange={changeData}>
            Escribe tu contraseña
          </Input>

          <button className="btn-submit">Ingresar</button>
        </form>
        <p className={`error-message${login.isValidData ? "" : " is-active"}`}>Uno o ambos datos son incorrectos</p>
      </section>
    </ContentContainer>
  )
}

export default LoginUser
