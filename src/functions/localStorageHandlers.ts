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