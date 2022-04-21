import SetHeader from "./SetHeader"

const ContentContainer = ({ headerForHome, children}) => {

  return (
    <>
      <SetHeader headerForHome={headerForHome}/>
      <main>
        { children }
      </main>
    </>
  )
}

export default ContentContainer