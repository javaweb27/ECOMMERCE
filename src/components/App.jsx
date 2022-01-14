import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import AllCupcakes from "./pages/allCupcakes";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import Page404 from "./pages/page404";
import Protected from "./routes/Protected";
import Public from "./routes/Public";
import CartProvider from "./context/cart/CartProvider";
import CupcakesProvider from "./context/cupcakes/CupcakesProvider";
import { BASE_PATH } from "../BASE_PATH";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <CartProvider>
    <CupcakesProvider request="cupcakes">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={BASE_PATH + "/login"} element={<Public render={Login}/>}/>
          <Route path={BASE_PATH + "/register"} element={<Public render={Register}/>}/>
          <Route path={BASE_PATH + "/cart"} element={<Protected render={Cart}/>}/>
          <Route path={BASE_PATH + "/cupcakes"} element={<Protected render={AllCupcakes}/>}/>
          <Route path={BASE_PATH + "/"} element={<Protected render={Home}/>} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </CupcakesProvider>
  </CartProvider>
)

export default App;
