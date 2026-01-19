
import React, { useState } from "react";

const SignInModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white w-1/3 p-6 rounded-lg shadow-lg z-10">
                <h2 className="text-2xl font-bold mb-8 mt-5">Sign In</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-50">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border px-3 py-2 rounded focus:outline-none mb-3 focus:ring-2 focus:ring-[#CFFA36]"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#CFFA36]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#CFFA36] text-black font-bold px-4 py-2 rounded mt-8 hover:brightness-90"
                    >
                        Submit
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 mr-1"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default SignInModal;
