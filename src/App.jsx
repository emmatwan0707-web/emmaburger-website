import { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
    const [activeCategory, setActiveCategory] = useState("burger");
    const menuRef = useRef(null);

    const handleNavClick = (category) => {
        setActiveCategory(category);

        menuRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div>
            <Header onNavClick={handleNavClick} />
            <Hero onNavClick={handleNavClick} />

            <div ref={menuRef}>
                <Menu
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;
