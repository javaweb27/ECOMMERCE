import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
    <Header/>
    <Switch>
      <Route path="/Proyecto-de-EDcupcake/cupcakes"><Cupcakes title="h1" request="cupcakes"/></Route>
      <Route path="/Proyecto-de-EDcupcake/"><Home/></Route>
    </Switch>
  </Router>
)

export default App;
