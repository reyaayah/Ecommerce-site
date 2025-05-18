export default function Testimonials() {
    const testimonials = [
        {
            img: "/customer1.svg",
            text: "The pizza was delicious and arrived hot!",
        },
        {
            img: "/customer1.svg",
            text: "Best pizza I've ever had! Highly recommend.",
        },
        {
            img: "/customer1.svg",
            text: "Fast delivery and great service. Will order again!",
        },
    ];

    return (
        <div className="bg-[#9D9292] p-10">
            <h1 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h1>
            <div className="p-8 flex justify-center gap-1">
                {testimonials.map(({ img, text }, i) => (
                    <div
                        key={i}
                        className="bg-[#EDE1EE] w-64 rounded-md p-6 flex flex-col items-center text-center"
                    >
                        <img
                            src={img}
                            alt={`Customer ${i + 1}`}
                            className="rounded-full w-20 h-20 mb-4 object-cover"
                        />
                        <p className="bg-[#9D9292] rounded-lg text-white italic">"{text}"</p>
                    </div>
                ))}
            </div>

        </div>
    );
}