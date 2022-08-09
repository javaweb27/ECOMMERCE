import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  getSelectedLanguage,
  setSelectedLanguage,
} from "../../../functions/localStorageHandlers"

const supportedLanguages = {
  en: "en",
  es: "es",
}

export type T_SupportedLanguages = keyof typeof supportedLanguages

const detectLanguage = () => navigator.language.slice(0, 2)

const setLanguage = () => {
  const langToSet = (getSelectedLanguage() || detectLanguage()) as T_SupportedLanguages

  if (supportedLanguages[langToSet]) {
    setSelectedLanguage(langToSet)

    return langToSet
  }

  // set to english when the detected language is not supported
  setSelectedLanguage("en")

  return "en"
}

const initialState: { current: T_SupportedLanguages } = {
  current: setLanguage(),
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, { payload }: PayloadAction<T_SupportedLanguages>) {
      state.current = payload
      localStorage.setItem("language", payload)
    },
  },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
