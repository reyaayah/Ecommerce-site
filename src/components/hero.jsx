export default function Hero() {
    return (
        <div id="hero" className="bg-[#E5D4E7] p-10 flex justify-around items-center ">
            <img
                src="/pizzahero.svg"
                alt="Pizza"
                className="w-64 mb-4"
            />
            <h1 className="text-5xl italic font-bold">
                "Hot, Fresh and Fast<br />-Pizza Delivered To You!"
            </h1>
        </div>
    );
}