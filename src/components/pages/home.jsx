import Cupcakes from "../sections/Cupcakes"
import Services from "../sections/Services"
import Banner from "../sections/Banner"
import ContentContainer from "../elements/ContentContainer"

const  Home = () => (
  <ContentContainer headerForHome>
    <Banner/>
    <Cupcakes title="h2" specificCupcakes="MOST_SOLD"/>
    <Services request="services"/>
  </ContentContainer>
)
export default Home