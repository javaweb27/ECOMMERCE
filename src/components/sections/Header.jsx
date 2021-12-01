import { NavLink } from "react-router-dom"
import { BASE_PATH } from "../../BASE_PATH"
import CartCounter from "../elements/CartCounter"

const Header = () => (
  <header className="header">
    <div className="img-container">
      <img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="icono de edcupcake"/>
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