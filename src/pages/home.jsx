import AboutUs from "../components/aboutus";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Products from "../components/products";
import Testimonials from "../components/testimonials";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <AboutUs />
            <Testimonials />
            <Footer />
        </>
    );
}