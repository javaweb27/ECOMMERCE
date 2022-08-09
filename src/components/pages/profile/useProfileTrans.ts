import useCurrentLanguage from "../../hooks/useCurrentLanguage"
import en from "../../../../locales/en/page-profile.json"
import es from "../../../../locales/es/page-profile.json"

const profileTrans = {
  en,
  es,
}

const useProfileTrans = () => {
  const current = useCurrentLanguage()

  return profileTrans[current]
}

export default useProfileTrans
