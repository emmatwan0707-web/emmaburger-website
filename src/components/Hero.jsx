import { useState } from "react";
import Hero from "../assets/Hero.jpg";
import snack from "../assets/snack.jpg";
import chicken from "../assets/chicken.jpg";


const slides = [
    {
        image: Hero,
        title: "Big Juicy Burger",
        desc: "Made with premium ingredients",
        cta: "Order Now",
        posClass: "top-[30%] left-[10%]",
        bgPos: "bg-[center_50%]",
        bgSize: "bg-[20%]",
    },
    {
        image: snack,
        title: "Cheesy & Crispy",
        desc: "Freshly Prepared Daily",
        cta: "View Menu",
        posClass: "top-[35%] left-[12%]",
        bgPos: "bg-[center_40%]",
        bgSize: "bg-[55%]",
        filter: "brightness-110 contrast-105"
    },
    {
        image: chicken,
        title: "Fast. Hot. Delicious.",
        desc: "Perfect for every bite",
        cta: "Find Us",
        posClass: "top-[40%] left-[15%]",
        bgPos: "bg-[center_50%]",
        bgSize: "bg-[50%]"
    },
];

export default function BurgerHero() {
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
                            className={`w-full h-full object-cover ${slide.scale || ""} ${slide.filter || ""}`}
                        />
                        <div className={`absolute ${slide.posClass} max-w-xl text-white`}>
                            <h1 className="font-title text-7xl mb-4 drop-shadow-md">{slide.title}</h1>
                            <p className="text-3xl mb-6 drop-shadow-md">{slide.desc}</p>
                            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-lg">
                                {slide.cta}
                            </button>
                        </div>
                    </div>

                ))}
            </div>


            <button
                onClick={prev}
                disabled={index === 0}
                className={`absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition hover:bg-gray-100 z-10 ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
                <span className="text-2xl text-black">←</span>
            </button>


            <button
                onClick={next}
                disabled={index === slides.length - 1}
                className={`absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition hover:bg-gray-100 z-10 ${index === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
                <span className="text-2xl text-black">→</span>
            </button>
        </section>
    );
}
