
import classes from "./index.module.scss"
import { useAppSelector } from "../../hooks/reduxHooks"
import Link from "./NavMenuLink"
import CartCounter from "./CartCounter"
import TimeleftCounter from "./TimeleftCounter"
import useLoginRegisterTrans from "../../pages/login-register/useLoginRegisterTrans"
import useNavMenuTrans from "./useNavMenuTrans"

const NavMenu = ({ header = false }: { header?: boolean }) => {
  const isLogged = useAppSelector(({ loginStatus }) => loginStatus.isLogged)

  const t = useNavMenuTrans()
  const tLoginRegister = useLoginRegisterTrans()

  return (
    <nav>
      <ul className={classes.navMenu}>
        <Link to="/" iconName={header ? "" : "home"}>
          {t.home}
        </Link>
        <Link to="/cupcakes" iconName={header ? "" : "cupcake"}>
          {t.products}
        </Link>
        <Link to="/cart" iconName={header ? "" : "cart"}>
          <CartCounter />
        </Link>
        {
          header && !isLogged ? <>
            <Link to="/login">{tLoginRegister["login-btn"]}</Link>
            <Link to="/register">{tLoginRegister["register-btn"]}</Link>{header ? "" : "Perfil"}
          </> : <Link to="/profile" iconName={"profile"}>
            {header ? "" : t.profile}
            {isLogged && <TimeleftCounter />}
          </Link>
        }
      </ul>
    </nav>
  )
}

export default NavMenu