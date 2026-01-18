import { useState } from "react";
import HeroImg from "../assets/Hero.jpg";
import snack from "../assets/snack.jpg";
import chicken from "../assets/chicken.jpg";

const slides = [
    {
        image: HeroImg,
        title: "Big Juicy Burger",
        desc: "Made with premium ingredients",
        cta: "Order Now",
        target: "burger",
        posClass: "top-[30%] left-[10%]",
    },
    {
        image: snack,
        title: "Cheesy & Crispy",
        desc: "Freshly Prepared Daily",
        cta: "View Menu",
        target: "fries",
        posClass: "top-[35%] left-[12%]",
    },
    {
        image: chicken,
        title: "Fast. Hot. Delicious.",
        desc: "Perfect for every bite",
        cta: "Find Us",
        target: "chicken",
        posClass: "top-[40%] left-[15%]",
    },
];

export default function Hero({ onNavClick }) {
    const [index, setIndex] = useState(0);

    const prev = () => index > 0 && setIndex(index - 1);
    const next = () => index < slides.length - 1 && setIndex(index + 1);

    return (
        <section className="relative w-screen h-[90vh] overflow-hidden">
            <div
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}vw)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="w-screen h-full relative flex-shrink-0">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />

                        <div className={`absolute ${slide.posClass} max-w-xl text-white`}>
                            <h1 className="font-title text-7xl mb-4 drop-shadow-md">
                                {slide.title}
                            </h1>
                            <p className="text-3xl mb-6 drop-shadow-md">
                                {slide.desc}
                            </p>

                            <button
                                onClick={() => onNavClick(slide.target)}
                                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-lg"
                            >
                                {slide.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left */}
            <button
                onClick={prev}
                disabled={index === 0}
                className={`absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition ${
                    index === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                }`}
            >
                ←
            </button>

            {/* Right */}
            <button
                onClick={next}
                disabled={index === slides.length - 1}
                className={`absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition ${
                    index === slides.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-gray-100"
                }`}
            >
                →
            </button>
        </section>
    );
}
