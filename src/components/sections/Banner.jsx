import { Link } from "react-router-dom"

const Banner = () => (
  <section className="banner" id="banner-section">
    <img className="bg-img" alt="cupcakes EDcupcakes" src="https://images.unsplash.com/photo-1581978392302-136a082482e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"/>
    <div className="container">
      <h1>Bievenido a EDcupcake</h1>
      <p>¡Un sitio lleno de sabor!</p>
      <Link to="/cupcakes" className="link">Ver cupcakes</Link>
    </div>
  </section>
)

export default Banner