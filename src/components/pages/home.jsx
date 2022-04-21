import { useEffect } from "react"
import Banner from "../page-sections/Banner"
import ContentContainer from "../elements/ContentContainer"
import CupcakesFeatures from "../page-sections/CupcakesFeatures"
import PastryCourse from "../page-sections/PastryCourse"
import Delivery from "../page-sections/Delivery"

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