import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import AllCupcakes from "./pages/allCupcakes";
import Login from "./pages/login";
import Register from "./pages/register";
import Protected from "./routes/Protected";
import CartProvider from "./context/cart/CartProvider";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const App = () => (
  <CartProvider>
    <Router>
      <Header/>
    
      <Switch>
        <Protected component={Login} path="/Proyecto-de-EDcupcake/login"/>
        <Protected component={Register} path="/Proyecto-de-EDcupcake/register"/>
        <Protected component={AllCupcakes} path="/Proyecto-de-EDcupcake/cupcakes" request="cupcakes"/>
        <Protected component={Home} path="/Proyecto-de-EDcupcake/" request="cupcakes?flavor_like=Chocolate"/>
      </Switch>
    </Router>
  </CartProvider>
)

export default App;
