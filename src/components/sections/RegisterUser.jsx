import { useState } from "react"

const RegisterUser = () => {

  const [data, setData] = useState({email: "", password: ""})

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
    console.log(data);
  }

  return (
    <section>
      <h1>Registrar usuario</h1>
      <form action="" onSubmit={submit}>
        <label htmlFor="email">Escribe tu nombre de usuario
          <input type="email" name="email" value={data.email} onChange={changeData} required/>
        </label>

        <label htmlFor="password">Escribe tu contraseña
          <input type="password" name="password" value={data.password} onChange={changeData} required/>
        </label>

        <label htmlFor="repeat-password">Repite la contraseña
          <input type="password" name="repeat-password" value={passwordRepeated} onChange={checkPassword} required/>
          { passwordError && <span>Las contraseñas tienen que ser iguales</span>}
        </label>

        <button>Registrar</button>
      </form>
    </section>
  )
}

export default RegisterUser