import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/page-home.json"
import es from "../../../../locales/es/page-home.json"

const homeTrans = {
  en,
  es,
}

const useHomeTrans = () => {
  const current = useCurrentLanguage()

  return homeTrans[current]
}

export default useHomeTrans
