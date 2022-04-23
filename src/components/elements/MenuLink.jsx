import { NavLink } from "react-router-dom"
import styles from "../../styles/elements/menu-link.module.scss"
import Icon from "./icon"

const MenuLink = ({to, iconName, children}) => {
  const className = ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <li className={styles.item}>
      <NavLink to={to} className={className}>
        { iconName && <Icon name={iconName}/> }
        { children }
      </NavLink>
    </li>
  )
}

export default MenuLink