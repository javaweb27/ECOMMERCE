import { NODE_API } from "../../config"
import { deleteAuthToken, getAuthToken } from "../../functions/localStorageHandlers"

/**
 * @param {string} endpoint
 * @param {function} dispatchPayload - the callback that will receive the api data
 * @param {object} dataToSend
 */

const fetchPATCH = async (
  endpoint: string,
  dispatchPayload: (a: any) => void,
  updateLoginStatus: () => void,
  dataToSend?: { amount: number }
) => {
  try {
    const res = await fetch(`${NODE_API}/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " + getAuthToken()
      },
      body: dataToSend ? JSON.stringify(dataToSend) : null
    })

    if (!res.ok) throw "fetchPATCH: Error res.ok is false"

    const json = await res.json()

    dispatchPayload(json.data)

  }
  catch (error) {
    deleteAuthToken()
    updateLoginStatus()
    console.error(error)
  }
}

export default fetchPATCH