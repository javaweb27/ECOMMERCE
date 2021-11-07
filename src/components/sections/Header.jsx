import { NavLink } from "react-router-dom"
import { BASE_PATH } from "../../BASE_PATH"
import CartCounter from "../elements/CartCounter"

const Header = () => (
  <header className="header">
    <div className="img-container">
      <img src="https://ux.ed.team/img/edteam-ux.svg" alt="icono de edcupcake"/>
    </div>
    <span/>
    <nav>
      <ul className="menu">
        <li className="item">
          <NavLink to={BASE_PATH + "/"} exact className="link" activeClassName="active-page">Inicio</NavLink>
        </li>
        <li className="item">
          <NavLink to={BASE_PATH + "/cupcakes"} exact className="link" activeClassName="active-page">Cupcakes</NavLink>
        </li>
        <li className="item">
          <NavLink to={BASE_PATH + "/login"} exact className="link" activeClassName="active-page">Iniciar Sesion</NavLink>
        </li>
        <li className="item">
          <NavLink to={BASE_PATH + "/register"} exact className="link" activeClassName="active-page">Registrarse</NavLink>
        </li>
        <li className="item">
          <NavLink to={BASE_PATH + "/cart"} exact className="link" activeClassName="active-page">
            <CartCounter/>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header