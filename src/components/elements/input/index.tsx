import classes from "./index.module.scss"

const Input = ({ i: inputName, name, value, children, ...params }: any) => {
  return (
    <label className={classes.label} htmlFor={name}>
      <span>{children}</span>
      <input id={name} className={classes.input} type={inputName} name={name} value={value} {...params} required />
    </label>
  )
}

export default Input