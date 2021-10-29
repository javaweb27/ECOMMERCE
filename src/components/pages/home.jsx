import Cupcakes from "../sections/Cupcakes"
import Services from "../sections/Services"
import Banner from "../sections/Banner"

const  Home = () => (
  <>
    <Banner/>
    <Cupcakes title="h2" specificCupcakes="MOST_SOLD"/>
    <Services request="services"/>
  </>
)
export default Home