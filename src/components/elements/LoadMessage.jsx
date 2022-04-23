const LoadMessage = ({ error, data, cupcakes }) => {
  const message = (error !== true && error !== false && !cupcakes) ?
    <span>Connecting to the api</span>

    : (error === false && data?.length === 0) ?
      <span>No cupcakes available</span>

    : (error === false && !cupcakes) ?
      <span>Loading fetched data</span>

    : (error === true && !cupcakes) ?
      <span>Error connecting to the api, loading local data</span>

    : null

  return message
}

export default LoadMessage