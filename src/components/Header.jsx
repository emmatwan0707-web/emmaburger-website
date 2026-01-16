import React from 'react';
import Logo from '../assets/burger.png';

const Header = () => {
    return (
        <header className="w-full bg-white text-black shadow-md">

            <nav className="flex items-center h-20 px-8 w-full max-w-7xl mx-auto">

                <div className="flex-1 text-2xl font-bold tracking-widest cursor-pointer">
                    <img src={Logo} alt="logo" className="w-10 h-10" />
                </div>

                <ul className="hidden md:flex justify-center space-x-8 font-medium text-lg gap-5 tracking-wide">
                    <li className="hover:text-[#CFFA36] cursor-pointer transition">Burger</li>
                    <li className="hover:text-[#CFFA36] cursor-pointer transition">Fries</li>
                    <li className="hover:text-[#CFFA36] cursor-pointer transition">Chicken</li>
                    <li className="hover:text-[#CFFA36] cursor-pointer transition">Drinks</li>
                </ul>

                <div className="flex-1 flex justify-end items-center space-x-6">
                    <button className="hover:text-[#CFFA36] transition font-medium">
                        Sign In
                    </button>
                    <button className="bg-[#CFFA36] text-black px-6 py-2 rounded-full font-bold hover:brightness-90 transition duration-300">
                        Order
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Header