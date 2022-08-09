import fetchJSON from "../../../fetch/fetchJSON"
import { setAuthToken } from "../../../functions/localStorageHandlers"
import { I_DataToSend } from "./formInterface"

const formSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  data: I_DataToSend,
  setFinished: (param: boolean) => void,
  updateLoginStatus: () => void
) => {
  event.preventDefault()

  const dataName = data.name

  const registerData = dataName ? { name: dataName } : {}

  const json = await fetchJSON<any>(dataName ? "register" : "login", {
    method: dataName ? "PUT" : "POST",
    body: JSON.stringify({
      ...registerData,
      email: data.email,
      password: data.password,
    }),
  })

  // if there is token in json, it is login
  if (json?.token) {
    setFinished(true)
    setAuthToken(json.token)
    updateLoginStatus()
  }
  // if json results in true, it is register
  else if (json) {
    setFinished(true)
  } else {
    setFinished(false)
  }
}

export default formSubmit
