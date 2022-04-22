const fetchPATCH = async (cupcakeId, dispatchPayload) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_REACT_API_URL}cupcakes/${cupcakeId}`, {
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
