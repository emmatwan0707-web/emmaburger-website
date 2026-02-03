import { useState } from "react";
import Logo from "../assets/burger.png";
import SignInModal from "./SignInModal";

const Header = ({ onNavClick }) => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-white text-black sticky top-0 z-50 shadow-sm">
                <nav className="flex items-center h-20 px-8 w-full max-w-7xl mx-auto">
                    {/* Logo */}

                    <div
                        className="flex-1 cursor-pointer"
                        onClick={() => {
                            // 使用 scrollTo 配合 behavior: "smooth"
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }}
                    >
                        <img src={Logo} alt="logo" className="w-10 h-10" />
                    </div>

                    {/* Nav */}
                    <ul className="hidden md:flex space-x-10 font-medium text-lg tracking-wide">
                        <li onClick={() => onNavClick("burger")} className="cursor-pointer hover:text-[#CFFA36] transition">Burger</li>
                        <li onClick={() => onNavClick("chicken")} className="cursor-pointer hover:text-[#CFFA36] transition">Chicken</li>
                        <li onClick={() => onNavClick("fries")} className="cursor-pointer hover:text-[#CFFA36] transition">Fries</li>
                        <li onClick={() => onNavClick("drinks")} className="cursor-pointer hover:text-[#CFFA36] transition">Drinks</li>
                    </ul>

                    {/* Actions */}
                    <div className="flex-1 flex justify-end items-center space-x-6">
                        <button
                            onClick={() => setIsSignInOpen(true)}
                            className="hover:text-[#CFFA36] transition font-medium"
                        >
                            Sign In
                        </button>
                        <button className="bg-[#CFFA36] text-black px-6 py-2 rounded-full font-bold hover:brightness-90 transition">
                            Order
                        </button>
                    </div>
                </nav>
            </header>

            {/* Sign In Modal */}
            <SignInModal
                isOpen={isSignInOpen}
                onClose={() => setIsSignInOpen(false)}
            />
        </>
    );
};

export default Header;
