const fetchPATCH = async (cupcakeId, dispatchPayload) => {
  const LOCAL_API = import.meta.env.VITE_LOCAL_API_URL
  const NODE_API = import.meta.env.VITE_NODE_API_URL

  try {
    const res = await fetch(`${NODE_API || LOCAL_API}cupcakes/${cupcakeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sold: true
      })
    })

    const json = res.ok && await res.json()

    dispatchPayload(json.sold)

  }
  catch (error) {
    console.error(error)
  }
}

export default fetchPATCH