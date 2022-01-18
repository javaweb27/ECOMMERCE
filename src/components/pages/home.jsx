import { useEffect } from "react"
import Banner from "../sections/Banner"
import ContentContainer from "../elements/ContentContainer"
import CupcakesFeatures from "../sections/CupcakesFeatures"
import PastryCourse from "../sections/PastryCourse"
import Delivery from "../sections/Delivery"

const  Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ContentContainer headerForHome>
      <Banner/>
      <CupcakesFeatures/>
      <PastryCourse/>
      <Delivery/>
    </ContentContainer>
  )
}
export default Home