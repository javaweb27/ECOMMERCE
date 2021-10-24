import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import AllCupcakes from "./pages/allCupcakes";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CupcakesProvider from "./context/cupcakes/CupcakesProvider";
import MostSoldProvider from "./context/most-sold/MostSoldProvider";
import CartProvider from "./context/cart/CartProvider";

const App = () => (
  <CartProvider>
    <Router>
      <Header/>
    
      <Switch>
        <Route path="/Proyecto-de-EDcupcake/cupcakes">
          <CupcakesProvider request="cupcakes">
            <AllCupcakes/>
          </CupcakesProvider>
        </Route>

        <Route path="/Proyecto-de-EDcupcake/">
          <MostSoldProvider request="cupcakes?flavor_like=Chocolate">
            <Home/>
          </MostSoldProvider>
        </Route>
      </Switch>
    </Router>
  </CartProvider>
)

export default App;
