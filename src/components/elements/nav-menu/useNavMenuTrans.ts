import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/cs-nav-menu.json"
import es from "../../../../locales/es/cs-nav-menu.json"

const navMenuTrans = {
  en,
  es,
}

const useNavMenuTrans = () => {
  const current = useCurrentLanguage()

  return navMenuTrans[current]
}

export default useNavMenuTrans
