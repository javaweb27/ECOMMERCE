import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/page-products.json"
import es from "../../../../locales/es/page-products.json"

const allProductsTrans = {
  en,
  es,
}

const useAllProductsTrans = () => {
  const current = useCurrentLanguage()

  return allProductsTrans[current]
}

export default useAllProductsTrans