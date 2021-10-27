import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import AllCupcakes from "./pages/allCupcakes";
import Login from "./pages/login";
import Register from "./pages/register";
import Page404 from "./pages/page404";
import Protected from "./routes/Protected";
import Public from "./routes/Public";
import CartProvider from "./context/cart/CartProvider";
import { BASE_PATH } from "../BASE_PATH";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <CartProvider>
    <Router>
      <Header/>
    
      <Switch>
        <Public 
          path={BASE_PATH + "/login"}
          component={Login}/>
        <Public 
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

        <Route>
          <Page404/>
        </Route>
        
      </Switch>
    </Router>
  </CartProvider>
)

export default App;
