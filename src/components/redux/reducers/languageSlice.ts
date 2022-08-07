import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getSelectedLanguage, setSelectedLanguage } from "../../../functions/localStorageHandlers"

export type T_SupportedLanguages = keyof typeof supportedLanguages

const supportedLanguages = {
  en: "en",
  es: "es",
}

const detectLanguage = () => navigator.language.slice(0, 2)

const setLanguage = () => {
  const selectedLanguage = (getSelectedLanguage() || detectLanguage()) as T_SupportedLanguages

  if (supportedLanguages[selectedLanguage]) {
    setSelectedLanguage(selectedLanguage)

    return selectedLanguage
  }

  //set to english when the detected language is not supported
  setSelectedLanguage("en")

  return "en"
}

const initialState: { current: T_SupportedLanguages } = {
  current: setLanguage()
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, { payload }: PayloadAction<T_SupportedLanguages>) {
      state.current = payload
      localStorage.setItem("language", payload)
    }
  }
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer