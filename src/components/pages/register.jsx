import { useState } from "react"
import ContentContainer from "../elements/ContentContainer"

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

  const submit = e => {
    e.preventDefault()
    if (!(data.password === passwordRepeated)) return
    alert("registrar")
  }

  return (
    <ContentContainer>
      <section>
        <h1 className="title">Registrar usuario</h1>
        <form action="" onSubmit={submit} className="register">
          <label htmlFor="name" className="data">Escribe tu nombre de usuario
            <input type="text" name="name" value={data.name} onChange={changeData} required/>
          </label>

          <label htmlFor="email" className="data">Escribe tu correo
            <input type="email" name="email" value={data.email} onChange={changeData} required/>
          </label>

          <label htmlFor="password" className="data">Escribe tu contraseña
            <input type="password" name="password" value={data.password} onChange={changeData} required/>
          </label>

          <label htmlFor="repeat-password" className="data">Repite la contraseña
            <input type="password" name="repeat-password" value={passwordRepeated} onChange={checkPassword} required/>
          </label>

          <p className={`error-message${passwordError ? " is-active" : ""}`}>Las contraseñas tienen que ser iguales</p>

          <input type="submit" value="Registrar" />
        </form>
      </section>
    </ContentContainer>
  )
}

export default RegisterUser