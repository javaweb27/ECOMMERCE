import { NODE_API } from "../../config"

/**
 * @param {string} endpoint
 * @param {function} dispatchPayload - the callback that will receive the api data
 * @param {object} dataToSend
 */

const fetchPATCH = async (
  endpoint: string,
  dispatchPayload: (a: any) => void,
  dataToSend?: { sold: boolean }
) => {
  try {
    const res = await fetch(`${NODE_API}/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " + localStorage.getItem("token")
      },
      body: dataToSend ? JSON.stringify(dataToSend) : null
    })

    if (!res.ok) throw "fetchPATCH: Error res.ok is false"

    const json = await res.json()

    dispatchPayload(json.data)

  }
  catch (error) {
    console.error(error)
    if (dataToSend?.sold) dispatchPayload(dataToSend.sold)
  }
}

export default fetchPATCH