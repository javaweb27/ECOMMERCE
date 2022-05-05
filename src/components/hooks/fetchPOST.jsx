/**
 * @param {string} endpoint 
 * @param {objectToStringify} data
 * @returns Promise: parsed json
 */

const fetchPOST = async (endpoint, data) => {
  const LOCAL_API = import.meta.env.VITE_LOCAL_API_URL
  const NODE_API = import.meta.env.VITE_NODE_API_URL

  try {
    const res = await fetch(`${NODE_API || LOCAL_API}${endpoint}`, {
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