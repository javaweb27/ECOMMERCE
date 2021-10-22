import {NavLink} from "react-router-dom"
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
            <NavLink 
              className="link" 
              activeClassName="active-page" 
              exact
              to="/Proyecto-de-EDcupcake/">Inicio
            </NavLink>
          </li>

          <li className="item">
            <NavLink 
              className="link" 
              activeClassName="active-page" 
              exact
              to="/Proyecto-de-EDcupcake/cupcakes">Cupcake
            </NavLink>
          </li>

          <li className="item">
            <CartCounter/>
          </li>
      </ul>
    </nav>
  </header>
)
export default Header