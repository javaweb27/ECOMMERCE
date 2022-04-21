import NavMenu from "../elements/NavMenu"

const Header = () => {

  return (
    <header className="header">
      <div className="img-container">
        <img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="icono de ecommerce"/>
      </div>
      <span/>
      <NavMenu header/>
    </header>
  )
}

export default Header