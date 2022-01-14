import { NavLink } from "react-router-dom"

const MenuLink = ({to, children}) => {
  return (
    <li className="item">
      <NavLink to={to} className={({isActive}) => isActive ? "link active-page" : "link"}>
        { children }
      </NavLink>
    </li>
  )
}

export default MenuLink