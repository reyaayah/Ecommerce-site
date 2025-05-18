import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="text-center p-6 bg-[#E6D8E9] text-gray-700">
            <nav className="mb-4 flex flex-col text-sm font-bold ">
                <a href="#menu" className="hover:underline">
                    Menu
                </a>
                <a href="#contact" className="hover:underline">
                    Contact
                </a>
                <a href="#privacy" className="hover:underline">
                    Privacy Policy
                </a>
            </nav>
            <div className="flex justify-center space-x-6 mb-4 text-xl text-gray-700">
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-purple-700">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-purple-700">
                    <FaInstagram />
                </a>
                <a href="https://tiktok.com" aria-label="TikTok" className="hover:text-purple-700">
                    <FaTiktok />
                </a>
                <a href="mailto:contact@pizzafiesta.com" aria-label="Email" className="hover:text-purple-700">
                    <FaEnvelope />
                </a>
            </div>


            <p className="text-xs text-gray-600">
                © 2025 Pizzeria. All rights reserved. Made with ❤️ for pizza lovers.
            </p>
        </footer>
    );
}