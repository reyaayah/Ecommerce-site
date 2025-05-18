import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import Products from "./components/products";
import Testimonials from "./components/testimonials";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
function App() {
  return (

    <div className="font-sans">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
