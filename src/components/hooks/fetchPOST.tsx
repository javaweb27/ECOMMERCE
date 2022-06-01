import { NODE_API } from "../../config"

/**
 * @param {string} endpoint 
 * @param {object} data object to stringify
 * @returns Promise: parsed json
 */

const fetchPOST = async (endpoint: string, data: object) => {

  try {
    const res = await fetch(`${NODE_API}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })

    return await res.json()
  }
  catch (error) {
    console.error("(Fetch) " + error)
  }
}

export default fetchPOST