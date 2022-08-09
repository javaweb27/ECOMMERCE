import "./index.scss"
import { Link } from "react-router-dom"
import ContentContainer from "../../fragments/ContentContainer"
import usePage404Trans from "./usePage404Trans"

const Page404 = () => {
  const t = usePage404Trans()

  return (
    <ContentContainer>
      <section className="page404">
        <div className="container">
          <h1 className="title">{t.title}</h1>
          <Link to="/" className="link">
            {t.btn}
          </Link>
        </div>
      </section>
    </ContentContainer>
  )
}

export default Page404
