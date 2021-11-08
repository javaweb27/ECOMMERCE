import { REACT_APP_URL_API } from "../../../API_URL"
import { SELL_CUPCAKE } from "../context/actions"

const useFetchPATCH = (id, cupcakesDispatch, cartDispatch) => {

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
  .then(data => {
    cupcakesDispatch({
      type: SELL_CUPCAKE,
      cupcake: id,
      sold: data.sold
    })
    cartDispatch({
      type: SELL_CUPCAKE,
      cupcake: {
        id: id,
        sold: data.sold
      }
    })
  })
}

export default useFetchPATCH