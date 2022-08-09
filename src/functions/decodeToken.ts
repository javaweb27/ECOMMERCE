import jwt_decode from "jwt-decode"
import { getAuthToken } from "./localStorageHandlers"

/**
 * Decodes the token that was saved in locaStorage with the name "token".
 * @returns The data from the decoded token, if the token is invalid null is returned
 */
const decodeToken = <T>(): T | null => {
  try {
    return jwt_decode(getAuthToken() || "")
  } catch (error) {
    return null
  }
}

export default decodeToken
