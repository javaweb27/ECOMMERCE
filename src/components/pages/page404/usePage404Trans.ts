import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/page-404.json"
import es from "../../../../locales/es/page-404.json"

const page404Trans = {
  en,
  es,
}

const usePage404Trans = () => {
  const current = useCurrentLanguage()

  return page404Trans[current]
}

export default usePage404Trans
