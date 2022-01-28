import { NavLink } from "react-router-dom"
import styles from "../../styles/elements/menu-link.module.scss"

const MenuLink = ({to, children}) => {
  const className = ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <li className={styles.item}>
      <NavLink to={to} className={className}>
        { children }
      </NavLink>
    </li>
  )
}

export default MenuLink