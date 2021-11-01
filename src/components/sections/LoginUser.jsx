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
      <h1>Iniciar sesion</h1>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Escribe tu nombre de usuario
          <input type="email" name="email" value={data.email} onChange={changeData} required/>
        </label>

        <label htmlFor="">Escribe tu contraseña
          <input type="password" name="password" value={data.password} onChange={changeData} required/>
        </label>

        <button>Ingresar</button>
      </form>
    </section>
  )
}

export default LoginUser