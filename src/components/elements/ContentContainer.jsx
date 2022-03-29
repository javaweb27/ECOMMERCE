import Header from "../sections/Header"
import Footer from "../sections/Footer"

const ContentContainer = ({ headerForHome, children}) => {
  return (
    <>
      <Header headerForHome={headerForHome}/>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}

export default ContentContainer