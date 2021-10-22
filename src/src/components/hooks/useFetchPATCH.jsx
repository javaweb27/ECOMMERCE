const useFetchPATCH = (id, setData) => {

  fetch(`${process.env.REACT_APP_URL_API}cupcakes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sold: true
    })
  })
  .then(response => response.ok && response.json())
  .then(data => setData(data.sold))
}

export default useFetchPATCH