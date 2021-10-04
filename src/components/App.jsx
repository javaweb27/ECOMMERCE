import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CupcakesProvider from "./context/CoursesProvider";

const App = () => (
  <CupcakesProvider request="cupcakes">
    <Router>
      <Header/>
      <Switch>
        <Route path="/Proyecto-de-EDcupcake/cupcakes"><Cupcakes title="h1"/></Route>
        <Route path="/Proyecto-de-EDcupcake/"><Home/></Route>
      </Switch>
    </Router>
  </CupcakesProvider>
)

export default App;
