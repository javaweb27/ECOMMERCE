import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/page-cart.json"
import es from "../../../../locales/es/page-cart.json"

const cartTrans = {
  en,
  es,
}

const useCartTrans = () => {
  const current = useCurrentLanguage()

  return cartTrans[current]
}

export default useCartTrans
