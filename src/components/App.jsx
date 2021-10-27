import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import AllCupcakes from "./pages/allCupcakes";
import Login from "./pages/login";
import Register from "./pages/register";
import Protected from "./routes/Protected";
import CartProvider from "./context/cart/CartProvider";
import { BASE_PATH } from "../BASE_PATH";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const App = () => (
  <CartProvider>
    <Router>
      <Header/>
    
      <Switch>
        <Protected 
          path={BASE_PATH + "/login"}
          component={Login}/>
        <Protected 
          path={BASE_PATH + "/register"}
          component={Register}/>
        <Protected 
          path={BASE_PATH + "/cupcakes"}
          request="cupcakes"
          component={AllCupcakes}/>
        <Protected 
          path={BASE_PATH + "/"}
          request="cupcakes?flavor_like=Chocolate"
          component={Home} />
      </Switch>
    </Router>
  </CartProvider>
)

export default App;
