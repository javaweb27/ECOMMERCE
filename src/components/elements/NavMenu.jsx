import styles from "../../styles/elements/nav-menu.module.scss"
import MenuLink from "./MenuLink"
import CartCounter from "./CartCounter"

const NavMenu = ({ header = false }) => {
  return (
    <nav>
      <ul className={styles["nav-menu"]}>
        <MenuLink to="/" iconName={header ? "" : "home" }>
          Inicio
        </MenuLink>
        <MenuLink to="/cupcakes" iconName={header ? "" : "cupcake"}>
          Cupcakes
        </MenuLink>
        <MenuLink to="/cart" iconName={header ? "" : "cart"}>
          <CartCounter/>
        </MenuLink>
        {
          header ? <>
            <MenuLink to="/login">Iniciar Sesion</MenuLink>
            <MenuLink to="/register">Registrarse</MenuLink>
          </>
          : (
            <MenuLink to="/profile" iconName={header ? "" : "profile"}>
              Perfil
            </MenuLink>
          )
        }
      </ul>
    </nav>
  )
}

export default NavMenu