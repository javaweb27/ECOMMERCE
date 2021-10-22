import { REACT_APP_URL_API } from "../../../API_URL"

const useFetchPATCH = (id, setData) => {

  fetch(`${REACT_APP_URL_API}cupcakes/${id}`, {
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