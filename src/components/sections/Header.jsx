import {Link} from "react-router-dom"

const Header = () => (
  <header className="header">
    <div className="img-container">
      <img src="https://ux.ed.team/img/edteam-ux.svg" alt="icono de edcupcake"/>
    </div>
    <span/>
    <nav>
      <ul className="menu">
          <li className="link"><Link to="/">Inicio</Link></li>
          <li className="link"><Link to="/cupcakes">Cupcake</Link></li>
      </ul>
    </nav>
  </header>
)
export default Header