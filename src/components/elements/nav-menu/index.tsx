import classes from "./index.module.scss"
import Link from "./NavMenuLink"
import CartCounter from "./CartCounter"

const NavMenu = ({ header = false }: { header?: boolean }) => {
  return (
    <nav>
      <ul className={classes["nav-menu"]}>
        <Link to="/" iconName={header ? "" : "home"}>
          Inicio
        </Link>
        <Link to="/cupcakes" iconName={header ? "" : "cupcake"}>
          Cupcakes
        </Link>
        <Link to="/cart" iconName={header ? "" : "cart"}>
          <CartCounter />
        </Link>
        {
          header ? <>
            <Link to="/login">Iniciar Sesion</Link>
            <Link to="/register">Registrarse</Link>
          </>
            : (
            <Link to="/profile" iconName={header ? "" : "profile"}>
              Perfil
            </Link>
          )
        }
      </ul>
    </nav>
  )
}

export default NavMenu