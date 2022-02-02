const Input = ({type, name, value, onChange, children}) => {
  return (
    <label htmlFor={name} className="data">
      <span>{ children }</span>
      <input type={type} id={name} name={name} value={value} onChange={onChange} required/>
    </label>
  )
}

export default Input