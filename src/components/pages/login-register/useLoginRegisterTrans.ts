import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/page-login-register.json"
import es from "../../../../locales/es/page-login-register.json"

const loginRegisterTrans = {
  en,
  es,
}

const useLoginRegisterTrans = () => {
  const current = useCurrentLanguage()

  return loginRegisterTrans[current]
}

export default useLoginRegisterTrans