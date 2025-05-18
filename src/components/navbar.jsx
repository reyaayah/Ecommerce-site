import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#9483D8] p-4 flex justify-between items-center relative">

            <div className="text-xl font-bold flex items-center">
                <img src="/logo.svg" alt="Logo" className="w-8 mr-2" />
                Pizzeria
            </div>

            <ul className="hidden md:flex space-x-12 font-semibold">
                <li><a href="#hero" className="hover:underline">Home</a></li>
                <li><a href="#menu" className="hover:underline">Menu</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                <li className="flex items-center space-x-1">
                    <span>Cart</span>
                    <FaShoppingCart className="text-lg" />
                </li>
            </ul>

            <FaUser className="text-xl hidden md:block" />

            <button
                className="md:hidden text-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FaTimes className="hidden" /> : <FaBars />}
            </button>

            {isMenuOpen && (
                <>
                    <div className="absolute top-16 left-0 w-32 bg-purple-200 p-4 flex flex-col space-y-4 md:hidden font-semibold z-50">
                        <FaTimes
                            className="text-sm cursor-pointer "
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        <a href="/cart" className="flex items-center space-x-1" onClick={() => setIsMenuOpen(false)}>
                            <span>Cart</span>
                            <FaShoppingCart className="text-lg" />
                        </a>

                    </div>
                    <FaUser className="text-xl" />
                </>
            )}
        </nav>
    );
}
