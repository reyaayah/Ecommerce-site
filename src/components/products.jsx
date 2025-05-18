import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../context/CartContext";
const pizzas = [
    {
        id: 1,
        name: "Neapolitan Style Pizza",
        price: 1500,
        img: "/pizza1.svg",
    },
    {
        id: 2,
        name: "Chicago Style Pizza",
        price: 1400,
        img: "/pizza2.png",
    },
    {
        id: 3,
        name: "Sicilian Style Pizza",
        price: 1700,
        img: "/pizza3.png",
    },
    {
        id: 4,
        name: "New York Style Pizza",
        price: 1600,
        img: "/pizza2.png",
    },
    {
        id: 5,
        name: "Greek Style Pizza",
        price: 1550,
        img: "/pizza2.png",
    },
];

export default function Products() {
    const scrollRef = useRef(null);
    const { cartItems, addToCart } = useCart();

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };
    const isInCart = (pizza) => {
        return cartItems.some((item) => item.name === pizza.name);
    };

    return (
        <div className="bg-[#9D9292]  p-16 relative">

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex space-x-10 overflow-x-auto scroll-smooth pb-4 scrollbar-hide w-[860px] mx-auto"
                >
                    {pizzas.map((pizza, index) => {
                        const added = isInCart(pizza);
                        return (
                            <div
                                key={index}
                                className={`min-w-[250px] bg-gray-100 p-4 rounded shadow text-center flex-shrink-0 }`}
                            >
                                <img
                                    src={pizza.img}
                                    alt={pizza.name}
                                    className="w-full h-48 object-cover mb-4 mx-auto"
                                />
                                <h2 className="font-bold text-lg mb-1">{pizza.name}</h2>
                                <p className="mb-2">Price: Rs. {pizza.price}</p>
                                <button
                                    onClick={() => {
                                        if (!added)
                                            console.log("Clicked add for:", pizza);
                                        addToCart(pizza);
                                    }}
                                    disabled={added}
                                    className={`px-4 py-2 rounded text-white transition-colors ${added
                                        ? "bg-green-500 cursor-not-allowed"
                                        : "bg-purple-600 hover:bg-purple-400"
                                        }`}
                                >
                                    {added ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={() => scroll("left")}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 shadow z-10"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 shadow z-10"
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className="text-center mt-10">
                <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-xl hover:bg-purple-600">
                    Explore more
                </button>
            </div>
        </div>
    );
}
