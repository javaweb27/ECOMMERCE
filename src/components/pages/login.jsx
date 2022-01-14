import { useState } from "react"

const LoginUser = () => {
  const [data, setData] = useState({email: "", password: ""})

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault()
    alert("iniciar sesion")
  }

  return (
    <section>
      <h1 className="title">Iniciar sesion</h1>
      <form action="" onSubmit={submit} className="login">
        <label htmlFor="email" className="data">Escribe tu correo
          <input type="email" name="email" value={data.email} onChange={changeData} required/>
        </label>

        <label htmlFor="password" className="data">Escribe tu contraseña
          <input type="password" name="password" value={data.password} onChange={changeData} required/>
        </label>

        <input type="submit" value="Ingresar" />
      </form>
    </section>
  )
}

export default LoginUser
