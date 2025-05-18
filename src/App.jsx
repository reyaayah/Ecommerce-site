import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
