interface I_Props {
  error: null | boolean;
  data: null | any[];
  products: boolean;
}

const LoadMessage = ({ error, data, products }: I_Props) => {
  const message = (error !== true && error !== false && !products) ?
    <span>Connecting to the api</span>

    : (error === false && data?.length === 0) ?
      <span>No cupcakes available</span>

    : (error === false && !products) ?
      <span>Loading fetched data</span>

    : (error === true && !products) ?
      <span>Error connecting to the api, loading local data</span>

    : null

  return message
}

export default LoadMessage