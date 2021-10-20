import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CupcakesProvider from "./context/CupcakesProvider";
import CupcakesMostSoldProvider from "./context/CupcakesMostSoldProvider";
import CartProvider from "./context/CartProvider";

const App = () => (
  <Router>
    <CartProvider>
      <Header/>
    </CartProvider>
    
    <Switch>
      <Route path="/Proyecto-de-EDcupcake/cupcakes">
        <CupcakesProvider request="cupcakes">
          <Cupcakes title="h1"/>
        </CupcakesProvider>
      </Route>

      <Route path="/Proyecto-de-EDcupcake/">
        <CupcakesMostSoldProvider request="cupcakes?flavor_like=Chocolate">
          <Home/>
        </CupcakesMostSoldProvider>
      </Route>
    </Switch>
  </Router>
)

export default App;
