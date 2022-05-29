import "../styles/styles.scss"
import Home from "./pages/home";
import AllCupcakes from "./pages/allCupcakes";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import Page404 from "./pages/page404";
import Protected from "./routes/Protected";
import Public from "./routes/Public";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./core-sections/Header";
import Footer from "./core-sections/Footer";
import ScrollToTop from "./elements/ScrollToTop";

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/ECOMMERCE">
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/login" element={<Public render={Login}/>}/>
        <Route path="/register" element={<Public render={Register}/>}/>
        <Route path="/cart" element={<Protected render={Cart}/>}/>
        <Route path="/cupcakes" element={<Protected render={AllCupcakes}/>}/>
        <Route path="/" element={<Protected render={Home}/>} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </Provider>
)

export default App;
