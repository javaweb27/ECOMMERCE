import Header from "../sections/Header"

const ContentContainer = ({ headerForHome, children}) => {
  return (
    <>
      <Header headerForHome={headerForHome}/>
      <main>
        { children }
      </main>
    </>
  )
}

export default ContentContainer