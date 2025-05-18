import { useCart } from "../context/CartContext";
export default function Cart() {

    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, } = useCart();
    console.log("Cart items in Cart page:", cartItems);
    const total = cartItems.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);
    return (
        <div className="bg-[#E5D4E7] p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center mb-4 p-4 border rounded shadow gap-4">
                            <div>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p>Rs. {item.price ?? 0} * {item.quantity ?? 1}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="bg-gray-300 px-2 py-1 rounded"
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="bg-gray-300 px-2 py-1 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-6 font-bold text-xl">Total: Rs. {total}</div>
                </div>
            )}
        </div>
    );
}