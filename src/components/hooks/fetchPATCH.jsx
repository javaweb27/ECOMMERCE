const fetchPATCH = async (endpoint, dispatchPayload, dataToSend) => {
  const LOCAL_API = import.meta.env.VITE_LOCAL_API_URL
  const NODE_API = import.meta.env.VITE_NODE_API_URL

  try {
    const res = await fetch(`${NODE_API || LOCAL_API}${endpoint}`, {
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
  }
}

export default fetchPATCH