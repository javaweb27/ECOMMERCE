import styles from "../../styles/elements/input.module.scss"

const Input = ({type, name, value, onChange, children}) => {
  return (
    <label className={styles.label} htmlFor={name}>
      <span>{ children }</span>
      <input className={styles.input} type={type} id={name} name={name} value={value} onChange={onChange} required/>
    </label>
  )
}

export default Input