import smokeburger from "../assets/smokeburger.png";
import classicburger from "../assets/classicburger.png";
import veggieburger from "../assets/veggieburger.png";
import chickenbreast from "../assets/chickenbreast.png";
import chickenbites from "../assets/chickenbites.png";
import crinklefries from "../assets/crinklefries.png";
import cheesefries from "../assets/cheesefries.png";
import coke from "../assets/coke.png";
import lemonade from "../assets/lemonade.png";
import sprite from "../assets/sprite.png";

const menuData = {
    burger: [
        {
            id: 1,
            title: "Smoke Burger®",
            desc: "Angus beef, American cheese, applewood smoked bacon.",
            cals: "830 cals",
            isVeg: false,
            image: smokeburger,
        },
        {
            id: 2,
            title: "Classic Burger®",
            desc: "Cheeseburger with lettuce, tomato and ShackSauce.",
            cals: "500 cals",
            isVeg: false,
            image: classicburger,
        },
        {
            id: 3,
            title: "Veggie Burger™",
            desc: "Mushroom-based veggie patty with cheese.",
            cals: "910 cals",
            isVeg: true,
            image: veggieburger,
        },
    ],
    chicken: [
        {
            id: 4,
            title: "Chicken Breast",
            desc: "Crispy chicken breast with lettuce and herb mayo.",
            cals: "550 cals",
            isVeg: false,
            image: chickenbreast,
        },
        {
            id: 5,
            title: "Chicken Bites",
            desc: "Crispy whole white meat chicken bites.",
            cals: "300 cals",
            isVeg: false,
            image: chickenbites,
        },
    ],
    fries: [
        {
            id: 6,
            title: "Crinkle Cut Fries",
            desc: "Classic crinkle cut fries.",
            cals: "420 cals",
            isVeg: true,
            image: crinklefries,
        },
        {
            id: 7,
            title: "Cheese Fries",
            desc: "Topped with cheese sauce.",
            cals: "560 cals",
            isVeg: true,
            image: cheesefries,
        },
    ],
    drinks: [
        {
            id: 8,
            title: "Coke",
            desc: "Classic Coca-Cola.",
            cals: "300 cals",
            isVeg: true,
            image: coke,
        },
        {
            id: 9,
            title: "Lemonade",
            desc: "Fresh squeezed lemonade.",
            cals: "360 cals",
            isVeg: true,
            image: lemonade,
        },
        {
            id: 10,
            title: "Sprite",
            desc: "Refreshing lemon-lime soda.",
            cals: "300 cals",
            isVeg: true,
            image: sprite,
        },
    ],
};

const categories = [
    { id: "burger", label: "Burgers" },
    { id: "chicken", label: "Chicken" },
    { id: "fries", label: "Fries" },
    { id: "drinks", label: "Drinks" },
];

export default function Menu({ activeCategory, setActiveCategory }) {
    return (
        <section className="min-h-screen bg-white text-gray-800">
            <div className="max-w-6xl mx-auto p-10 flex gap-10">

                {/* Left */}
                <aside className="w-[20%]">
                    <div className="sticky top-28">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`block mb-8 text-lg font-bold border-b-2 pb-1 transition ${
                                        isActive
                                            ? "text-[#CFFA36] border-[#CFFA36]"
                                            : "text-gray-400 border-transparent hover:text-gray-600"
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* Right */}
                <main className="flex-1">
                    <h2 className="text-3xl font-bold mb-8 capitalize">
                        {activeCategory}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {menuData[activeCategory].map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-xl p-6 hover:shadow-md transition flex flex-col gap-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <h3 className="text-xl font-bold">
                                                {item.title}
                                            </h3>
                                            {item.isVeg && (
                                                <span className="text-xs font-bold text-[#CFFA36] border border-[#CFFA36] px-2 rounded">
                                                    VEG
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {item.desc}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-2">
                                            {item.cals}
                                        </p>
                                    </div>

                                    <button className="mt-4 w-full py-2 rounded-full bg-[#CFFA36] font-bold hover:brightness-90">
                                        Start Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}
