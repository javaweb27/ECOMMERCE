import "./banner.scss"
import { Link } from "react-router-dom"
import useHomeTrans from "./useHomeTrans"

const Banner = () => {
  const t = useHomeTrans()

  return (
    <section className="banner" id="banner-section">
      <img
        className="bg-img"
        alt="cupcakes ecommerce"
        src="https://images.unsplash.com/photo-1581978392302-136a082482e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
      />
      <div className="container">
        <h1>{t["banner-title"]}</h1>
        <p>{t["banner-subtitle"]}</p>
        <Link to="/cupcakes" className="link">
          {t["banner-btn"]}
        </Link>
      </div>
    </section>
  )
}

export default Banner
