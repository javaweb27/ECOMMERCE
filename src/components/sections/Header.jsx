import CartCounter from "../elements/CartCounter"
import RelativeLink from "../elements/RelativeLink"

const Header = () => (
  <header className="header">
    <div className="img-container">
      <img src="https://ux.ed.team/img/edteam-ux.svg" alt="icono de edcupcake"/>
    </div>
    <span/>
    <nav>
      <ul className="menu">
        <li className="item">
          <RelativeLink path="/" text="Inicio"/>
        </li>
        <li className="item">
          <RelativeLink path="/cupcakes" text="Cupcakes"/>
        </li>
        <li className="item">
          <RelativeLink path="/login" text="Iniciar sesion"/>
        </li>
        <li className="item">
          <RelativeLink path="/register" text="Registrarse"/>
        </li>
        <li className="item">
          <CartCounter/>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header