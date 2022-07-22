import { useAppSelector } from "./reduxHooks"

const useCurrentLanguage = () => {
  return useAppSelector(({ language }) => language.current)
}

export default useCurrentLanguage