/**
 * Deletes the token that was saved in localStorage with the name "token"
 */
export const deleteAuthToken = () => localStorage.removeItem("token")

/**
 * 
 * @returns The token that was saved in localStorage with the name "token", it may be null.
 */
export const getAuthToken = () => localStorage.getItem("token")

/**
 * Saves the token in localStorage with the name "token".
 *
 * The token must be obtained when logging in.
 *
 * @param {string} token
 */
export const setAuthToken = (token: string) => localStorage.setItem("token", token)

/**
 * @returns Language that was saved in localStorage with the name "language". It may be null.
 */
export const getSelectedLanguage = () => localStorage.getItem("language")

/**
 * Saves the selected language in localStorage with the name "language".
 */
export const setSelectedLanguage = (lang: string) => localStorage.setItem("language", lang)