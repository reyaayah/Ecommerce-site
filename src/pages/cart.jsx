export default function Cart() {
    return (
        <div className="bg-[#E5D4E7] p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <p className="text-lg font-semibold">Your cart is empty.</p>
                <p className="text-gray-600">Add some delicious pizzas to your cart!</p>
            </div>
        </div>
    );
}