import { NODE_API } from "../config"

/**
 * Fetchs or sends JSON data, try and catch is already included.
 * @param {string} endpoint base path of the Node API is already included, "/" is not necessary.
 * @param init - content JSON is already included in headers.
 * @returns Promise: response in parsed JSON or null is the fetch fails.
 */
const fetchJSON = async <T>(endpoint: string, init: RequestInit): Promise<T | null> => {
  try {
    const res = await fetch(`${NODE_API}/${endpoint}`, {
      ...init,
      headers: {
        ...init.headers,
        "Content-Type": "application/json",
      },
    })

    return await res.json()
  } catch (error) {
    console.error("error fetch json:", error)
    return null
  }
}

export default fetchJSON
