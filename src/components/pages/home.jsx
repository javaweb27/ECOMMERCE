import Cupcakes from "../sections/Cupcakes"
import Services from "../sections/Services"
import Banner from "../sections/Banner"
import ContentContainer from "../elements/ContentContainer"
import { useEffect } from "react"

const  Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ContentContainer headerForHome>
      <Banner/>
      <Cupcakes title="h2" specificCupcakes="MOST_SOLD"/>
      <Services request="services"/>
    </ContentContainer>
  )
}
export default Home