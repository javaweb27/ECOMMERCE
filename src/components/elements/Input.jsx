import styles from "../../styles/elements/input.module.scss"

const Input = ({ i: inputName, name, value, children, ...params }) => {
  return (
    <label className={styles.label} htmlFor={name}>
      <span>{children}</span>
      <input id={name} className={styles.input} type={inputName} name={name} value={value} {...params} required />
    </label>
  )
}

export default Input