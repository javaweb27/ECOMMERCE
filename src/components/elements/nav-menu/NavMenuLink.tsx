import classes from "./nav-menu-link.module.scss"
import { NavLink } from "react-router-dom"
import Icon from "../icon"

interface I_Props {
  to: string,
  iconName?: string,
  children: any
}

const NavMenuLink = ({ to, iconName, children }: I_Props) => {
  return (
    <li className={classes.item}>
      <NavLink to={to} className={className}>
        {iconName && <Icon name={iconName} />}
        {children}
      </NavLink>
    </li>
  )
}

function className({ isActive }: { isActive: boolean }) {
  return isActive ? `${classes.link} ${classes.active}` : classes.link
}


export default NavMenuLink