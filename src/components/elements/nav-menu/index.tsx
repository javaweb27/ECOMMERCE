
import classes from "./index.module.scss"
import Link from "./NavMenuLink"
import CartCounter from "./CartCounter"
import { useSelector } from "react-redux"
import TimeleftCounter from "./TimeleftCounter"

const NavMenu = ({ header = false }: { header?: boolean }) => {
  const isLogged: boolean = useSelector(({ loginStatusSlice }: any) => loginStatusSlice.isLogged)

  return (
    <nav>
      <ul className={classes.navMenu}>
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
          header && !isLogged ? <>
            <Link to="/login">Iniciar Sesion</Link>
            <Link to="/register">Registrarse</Link>{header ? "" : "Perfil"}
          </> : <Link to="/profile" iconName={"profile"}>
            {header ? "" : "Perfil"}
            {isLogged && <TimeleftCounter />}
          </Link>
        }
      </ul>
    </nav>
  )
}

export default NavMenu