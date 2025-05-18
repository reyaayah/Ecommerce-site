import React from "react";

export default function AboutUs({
    heading = ["Why", "Choose", "us?"],
    infoList = ["🥬 Fresh Ingredients,", "⏰ 30-Min Delivery,", "🍕 Customizable Orders"],
}) {
    return (
        <div id="about" className="px-20 py-40 flex items-center justify-around"
            style={{
                backgroundImage: "url('/bg_aboutus.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            {/* Heading */}
            <h1 className="text-8xl font-normal leading-snug max-w-xs">
                {heading.map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </h1>

            {/* Info box */}
            <div className="bg-[#9D9292] bg-opacity-50 rounded-md p-6 w-1/3 text-white">
                <ul className="list-disc list-inside space-y-8 text-3xl">
                    {infoList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
