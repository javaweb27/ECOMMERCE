import NavMenuLink from "../../elements/nav-menu/NavMenuLink"
import "./index.scss"

const Profile = () => {
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