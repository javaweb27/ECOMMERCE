import { useRef } from "react"
import getHeight from "../../functions/getHeight"
import CartCounter from "../elements/CartCounter"
import MenuLink from "../elements/MenuLink"

const Header = () => {
  const header = useRef()

  document.onscroll = () => {
    if (window.scrollY >= getHeight(document.getElementById("banner-section")) - getHeight(header.current)) {
      header.current.classList.add("bg-active")
    }
    else {
      header.current.classList.remove("bg-active")
    }
  }

  return (
    <header ref={header} className="header">
      <div className="img-container">
        <img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="icono de edcupcake"/>
      </div>
      <span/>
      <nav>
        <ul className="menu">
          <MenuLink to="/">Inicio</MenuLink>
          <MenuLink to="/cupcakes">Cupcakes</MenuLink>
          <MenuLink to="/login">Iniciar Sesion</MenuLink>
          <MenuLink to="/register">Registrarse</MenuLink>
          <MenuLink to="/cart">
            <CartCounter/>
          </MenuLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header