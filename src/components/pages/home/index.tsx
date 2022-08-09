import Banner from "./Banner"
import ContentContainer from "../../fragments/ContentContainer"
import Features from "./Features"
import PastryCourse from "./PastryCourse"
import Delivery from "./Delivery"

const Home = () => {
  return (
    <ContentContainer>
      <Banner />
      <Features />
      <PastryCourse />
      <Delivery />
    </ContentContainer>
  )
}
export default Home
