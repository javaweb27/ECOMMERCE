import "./index.scss"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import ContentContainer from "../../fragments/ContentContainer"
import Input from "../../elements/input"
import verifyValidChars from "../../../functions/verifyValidChars"
import { emailRegex } from "../../../functions/regex"
import formSubmit from "./formSubmit"
import { I_FormBaseProps, I_StateData } from "./formInterface"

const FormBase = ({ register = false, title }: I_FormBaseProps) => {
  const [data, setData] = useState<I_StateData>({ email: "", password: "", name: "", repPassword: "" })
  const [isValidData, setIsValidData] = useState<boolean>(true)
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
  const [finished, setFinished] = useState<boolean | null>(null)

  const areValidValues: boolean = verifyValidChars(data.email) && verifyValidChars(data.name)

  if (finished === true) return <Navigate to={register ? "/login" : "/"} />

  // if the email or name input has value, verify that it is valid and update its state
  if ((data.email !== "" || data.name !== "")) {
    if (areValidValues && !isValidData) {
      setIsValidData(true)
    }
    else if (!areValidValues && isValidData) {
      setIsValidData(false)
    }

    if (emailRegex.test(data.email) && !isValidEmail) {
      setIsValidEmail(true)
    }
    else if (!emailRegex.test(data.email) && isValidEmail) {
      setIsValidEmail(false)
    }
  }

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  return <ContentContainer>
    <section className="login-register">
      <form onSubmit={event => formSubmit(event, data, setFinished)}>
        <h1 className="title">{title}</h1>

        {register && (
          <Input i="text" name="name" value={data.name} onChange={changeData} placeholder="Tu nombre de usuario">
            Nombre de usuario
          </Input>
        )}

        <Input i="email" name="email" value={data.email} onChange={changeData} placeholder={register ? "ejemplo@dominio.com" : ""}>
          Correo electrónico
        </Input>

        <Input i="password" name="password" value={data.password} onChange={changeData}>
          Contraseña
        </Input>

        {register && (
          <Input i="password" name="repPassword" value={data.repPassword} onChange={changeData}>
            Repite la contraseña
          </Input>
        )}

        <button className="btn-submit">{register ? "Registrar" : "Ingresar"}</button>

        {(finished === false) && (
          <p>
            {register ? "Ese correo electrónico no esta disponible" : "Los datos son incorrectos"}
          </p>
        )}

        {!isValidEmail && data.email !== "" && (
          <p>
            El correo electrónico esta incompleto o tiene caracteres que no se admiten
          </p>
        )}

        {!isValidData && (data.email !== "" || data.name !== "") && (
          <p>
            Hay caracteres invalidos en el correo electrónico{register && " o en el nombre de usuario"}
          </p>
        )}

        {register && data.password !== data.repPassword && (
          <p>
            Las contraseñas tienen que ser iguales
          </p>
        )}
      </form>
    </section>
  </ContentContainer>
}

export const Login = () => <FormBase title="Iniciar sesion" />
export const Register = () => <FormBase register title="Crear cuenta" />