import { useRef } from "react"
import getHeight from "../../functions/getHeight"
import CartCounter from "../elements/CartCounter"
import MenuButton from "../elements/MenuButton"
import MenuLink from "../elements/MenuLink"

const Header = ({headerForHome}) => {
  const header = useRef()
  const menu = useRef()

  document.onscroll = () => {
    if (!headerForHome) return

    if (window.scrollY >= window.innerHeight - getHeight(header.current)) {
      header.current.classList.add("bg-active")
    }
    else {
      header.current.classList.remove("bg-active")
    }
  }

  return (
    <header ref={header} className={`header${headerForHome ? " fixed" : ""}`}>
      <div className="img-container">
        <img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="icono de edcupcake"/>
      </div>
      <span/>
      <nav>
        <ul ref={menu} className="menu">
          <MenuLink to="/">Inicio</MenuLink>
          <MenuLink to="/cupcakes">Cupcakes</MenuLink>
          <MenuLink to="/login">Iniciar Sesion</MenuLink>
          <MenuLink to="/register">Registrarse</MenuLink>
          <MenuLink to="/cart">
            <CartCounter/>
          </MenuLink>
        </ul>
      </nav>
      <MenuButton menuRef={menu}/>
    </header>
  )
}

export default Header