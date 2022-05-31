import SetHeader from "../elements/SetHeader"

interface I_Props {
  headerForHome?: boolean,
  children: any
}

const ContentContainer = ({ headerForHome, children}: I_Props) => {
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