import Cupcakes from "./cupcakes"
import Services from "../sections/Services"
import Banner from "../sections/Banner"

const  Home = () => (
  <>
    <Banner/>
    <Cupcakes title="h2" request="cupcakes?flavor_like=Chocolate"/>
    <Services request="services"/>
  </>
)
export default Home