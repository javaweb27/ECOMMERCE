import "./index.scss"
import { Link } from "react-router-dom"
import ContentContainer from "../../fragments/ContentContainer"

const Page404 = () => {

  return (
    <ContentContainer headerForHome>
      <section className="page404">
        <div className="container">
          <h1 className="title">404 page not found</h1>
          <Link to="/" className="link">Ir al Home</Link>
        </div>
      </section>
    </ContentContainer>
  )
}

export default Page404