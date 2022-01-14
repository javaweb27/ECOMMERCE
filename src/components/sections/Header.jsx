import { NavLink } from "react-router-dom"
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
          <NavLink to="/" className={({isActive}) => isActive ? "link active-page" : "link"}>Inicio</NavLink>
        </li>
        <li className="item">
          <NavLink to="/cupcakes" className={({isActive}) => isActive ? "link active-page" : "link"}>Cupcakes</NavLink>
        </li>
        <li className="item">
          <NavLink to="/login" className={({isActive}) => isActive ? "link active-page" : "link"}>Iniciar Sesion</NavLink>
        </li>
        <li className="item">
          <NavLink to="/register" className={({isActive}) => isActive ? "link active-page" : "link"}>Registrarse</NavLink>
        </li>
        <li className="item">
          <NavLink to="/cart" className={({isActive}) => isActive ? "link active-page" : "link"}><CartCounter/></NavLink>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header