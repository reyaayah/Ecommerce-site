import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const pizzas = [
    {
        name: "Neapolitan Style Pizza",
        price: 1500,
        img: "/pizza1.svg",
    },
    {
        name: "Chicago Style Pizza",
        price: 1400,
        img: "/pizza2.png",
    },
    {
        name: "Sicilian Style Pizza",
        price: 1700,
        img: "/pizza3.png",
    },
    {
        name: "New York Style Pizza",
        price: 1600,
        img: "/pizza2.png",
    },
    {
        name: "Greek Style Pizza",
        price: 1550,
        img: "/pizza2.png",
    },
];

export default function Products() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-gray-400 p-16 relative">

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex space-x-10 overflow-x-auto scroll-smooth pb-4 scrollbar-hide w-[860px] mx-auto"
                >
                    {pizzas.map((pizza, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] bg-gray-100 p-4 rounded shadow text-center flex-shrink-0"
                        >
                            <img
                                src={pizza.img}
                                alt={pizza.name}
                                className="w-full h-48 object-cover mb-4 mx-auto"
                            />
                            <h2 className="font-bold text-lg mb-1">{pizza.name}</h2>
                            <p className="mb-2">Price: Rs. {pizza.price}</p>
                            <button className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-400">
                                Add to Cart
                            </button>
                        </div>
                    ))}
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
