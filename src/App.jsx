import AboutUs from "./components/aboutus";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
    </div>
  );
}

export default App;
