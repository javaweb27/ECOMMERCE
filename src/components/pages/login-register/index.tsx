import "./index.scss"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/reduxHooks"
import useLoginRegisterTrans from "./useLoginRegisterTrans"
import ContentContainer from "../../fragments/ContentContainer"
import Input from "../../elements/input"
import verifyValidChars from "../../../functions/verifyValidChars"
import { emailRegex } from "../../../functions/regex"
import formSubmit from "./formSubmit"
import { I_FormBaseProps, I_StateData } from "./formInterface"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const FormBase = ({ register = false }: I_FormBaseProps) => {
  const t = useLoginRegisterTrans()

  const dispatch = useAppDispatch()

  const [data, setData] = useState<I_StateData>({
    email: "",
    password: "",
    name: "",
    repPassword: "",
  })
  const [isValidData, setIsValidData] = useState<boolean>(true)
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
  const [finished, setFinished] = useState<boolean | null>(null)

  const areValidValues: boolean =
    verifyValidChars(data.email) && verifyValidChars(data.name)

  if (finished === true) return <Navigate to={register ? "/login" : "/"} />

  // if the email or name input has value, verify that it is valid and update its state
  if (data.email !== "" || data.name !== "") {
    if (areValidValues && !isValidData) {
      setIsValidData(true)
    } else if (!areValidValues && isValidData) {
      setIsValidData(false)
    }

    if (emailRegex.test(data.email) && !isValidEmail) {
      setIsValidEmail(true)
    } else if (!emailRegex.test(data.email) && isValidEmail) {
      setIsValidEmail(false)
    }
  }

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <ContentContainer>
      <section className="login-register">
        <form
          onSubmit={event =>
            formSubmit(event, data, setFinished, () => dispatch(updateLoginStatus()))
          }
        >
          <h1 className="title">{t[`${register ? "register" : "login"}-title`]}</h1>

          {register && <p>{t["msg-account-will-be-deleted"]}</p>}

          {register && (
            <Input i="text" name="name" value={data.name} onChange={changeData}>
              {t["input-name"]}
            </Input>
          )}

          <Input i="email" name="email" value={data.email} onChange={changeData}>
            {t["input-email"]}
          </Input>

          <Input i="password" name="password" value={data.password} onChange={changeData}>
            {t["input-password"]}
          </Input>

          {register && (
            <Input
              i="password"
              name="repPassword"
              value={data.repPassword}
              onChange={changeData}
            >
              {t["input-rep-password"]}
            </Input>
          )}

          <button className="btn-submit">
            {t[`${register ? "register" : "login"}-btn`]}
          </button>

          {finished === false && (
            <p>{register ? t["msg-email-not-available"] : t["msg-incorrect-data"]}</p>
          )}

          {!isValidEmail && data.email !== "" && <p>{t["msg-invalid-email"]}</p>}

          {!isValidData && (data.email !== "" || data.name !== "") && (
            <p>
              {t["msg-invalid-email-r"]} {register && t["msg-invalid-name-r"]}
            </p>
          )}

          {register && data.password !== data.repPassword && (
            <p>{t["msg-rep-password"]}</p>
          )}
        </form>
      </section>
    </ContentContainer>
  )
}

export const Login = () => <FormBase />
export const Register = () => <FormBase register />
