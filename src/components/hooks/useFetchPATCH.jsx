import { sellCupcake } from "../redux/reducers/cupcakesSlice"

const useFetchPATCH = (cupcakeId, dispatch) => {
  fetch(`${import.meta.env.VITE_REACT_API_URL}cupcakes/${cupcakeId}`, {
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
