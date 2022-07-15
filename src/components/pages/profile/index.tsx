import "./index.scss"
import { useAppSelector } from "../../hooks/reduxHooks"
import NavMenuLink from "../../elements/nav-menu/NavMenuLink"
import ChangePasswordForm from "./ChangePasswordForm"
import BtnLogout from "./BtnLogout"
import BtnDeleteAccount from "./BtnDeleteAccount"

const Profile = () => {
  const { isLogged, loginData } = useAppSelector(({ loginStatus }) => loginStatus)

  if (isLogged) {
    return (
      <section className="profile-container">
        <p className="par">Tus datos:</p>
        <ul className="list">
          <li className="item">Nombre: {loginData?.name}</li>
          <li className="item">Correo: {loginData?.email}</li>
        </ul>

        <ChangePasswordForm email={loginData!.email} />
        <BtnLogout />
        <BtnDeleteAccount />
      </section>
    )
  }

  return (
    <section className="profile-container">
      <div className="link">
        <NavMenuLink to="/login">Iniciar Sesion</NavMenuLink>
      </div>
      <br />
      <div className="link">
        <NavMenuLink to="/register">Registrarse</NavMenuLink>
      </div>
    </section>
  )
}

export default Profile