import { REACT_APP_URL_API } from "../../../API_URL"
import { sellCupcake } from "../redux/actionCreators"

const useFetchPATCH = (cupcakeId, dispatch) => {
  fetch(`${REACT_APP_URL_API}cupcakes/${cupcakeId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sold: true
    })
  })
  .then(response => response.ok && response.json())
  .then(data => {
    dispatch(sellCupcake({
      id: cupcakeId,
      sold: data.sold
    }))
  })
}

export default useFetchPATCH