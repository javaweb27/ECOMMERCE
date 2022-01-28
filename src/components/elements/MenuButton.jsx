import { useRef } from "react"
import Icon from "./icon"
import styles from "../../styles/elements/menu-button.module.scss"

const MenuButton = ({menuRef}) => {
  const button = useRef()

  const toggleMenu = () => {
    menuRef.current.classList.toggle("is-active")
    button.current.classList.toggle(styles["is-active"])
  }

  return (
    <button ref={button} onClick={toggleMenu} className={styles.button}>
      <Icon name="list" className={styles.list}/>
      <Icon name="close" className={styles.close}/>
    </button>
  )
}

export default MenuButton