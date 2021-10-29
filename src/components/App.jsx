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
import CupcakesProvider from "./context/cupcakes/CupcakesProvider";
import { BASE_PATH } from "../BASE_PATH";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <CartProvider>
    <CupcakesProvider request="cupcakes">
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
            component={AllCupcakes}/>
          <Protected 
            path={BASE_PATH + "/"}
            component={Home} />

            <Route>
              <Page404/>
            </Route>
          
        </Switch>
      </Router>
    </CupcakesProvider>
  </CartProvider>
)

export default App;
