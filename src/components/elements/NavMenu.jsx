import styles from "../../styles/elements/nav-menu.module.scss"
import MenuLink from "./MenuLink"
import CartCounter from "./CartCounter"

const NavMenu = ({header = false}) => {
  return (
    <nav>
      <ul className={styles["nav-menu"]}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/cupcakes">Cupcakes</MenuLink>
        <MenuLink to="/cart">
          <CartCounter/>
        </MenuLink>
        {
          header ? <>
            <MenuLink to="/login">Iniciar Sesion</MenuLink>
            <MenuLink to="/register">Registrarse</MenuLink>
          </>
          : (
            <MenuLink to="/profile">Perfil</MenuLink>
          )
        }
      </ul>
  </nav>
  )
}

export default NavMenu