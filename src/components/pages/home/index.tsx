import Banner from "./Banner"
import ContentContainer from "../../fragments/ContentContainer"
import CupcakesFeatures from "./CupcakesFeatures"
import PastryCourse from "./PastryCourse"
import Delivery from "./Delivery"

const  Home = () => {

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