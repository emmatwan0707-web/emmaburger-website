import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20">
            <div className="max-w-7xl mx-auto px-8">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">

                    {/* About Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">About Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Our Values</li>
                            <li className="hover:text-white cursor-pointer">Locations</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Investors</li>
                            <li className="hover:text-white cursor-pointer">
                                US Animal Welfare Policy
                            </li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer">Online Ordering</li>
                            <li className="hover:text-white cursor-pointer">Locations</li>
                            <li className="hover:text-white cursor-pointer">Shack Truck</li>
                            <li className="hover:text-white cursor-pointer">
                                Nutrition & Allergen Info
                            </li>
                            <li className="hover:text-white cursor-pointer">Gift Cards</li>
                            <li className="hover:text-white cursor-pointer">Shack Store</li>
                        </ul>
                    </div>

                    {/* Inquiries */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Inquiries</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Catering</li>
                            <li className="hover:text-white cursor-pointer">Fundraising</li>
                            <li className="hover:text-white cursor-pointer">Be Our Partner</li>
                            <li className="hover:text-white cursor-pointer">Press Inquiries</li>
                            <li className="hover:text-white cursor-pointer">FAQs</li>
                        </ul>
                    </div>

                    {/* App + Email */}
                    <div>


                        <h3 className="font-semibold text-lg mb-4">
                            Join Our Mailing List
                        </h3>

                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-black border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
                            />
                            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social icons */}
                <div className="flex gap-6 text-xl pb-10">
                    <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                    <FaTwitter className="hover:text-gray-300 cursor-pointer" />
                    <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
                    <FaYoutube className="hover:text-gray-300 cursor-pointer" />
                    <FaTiktok className="hover:text-gray-300 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6 pb-10 text-xs text-gray-400 space-y-3">
                    <div className="flex flex-wrap gap-4">
                        <span>Web Accessibility</span>
                        <span>|</span>
                        <span>Privacy</span>
                        <span>|</span>
                        <span>Your Privacy Choices</span>
                        <span>|</span>
                        <span>Terms of Use</span>
                        <span>|</span>
                        <span>Email Disclaimer</span>
                        <span>|</span>
                        <span>CA Privacy</span>
                        <span>|</span>
                        <span>CA Transparency in Supply</span>
                        <span>|</span>
                        <span>Offer Terms</span>
                        <span>|</span>
                        <span>Sitemap</span>
                    </div>

                    <p>
                        ©2004–2026 Emma Burger. All Rights Reserved.
                    </p>
                    <p>
                        Some information on this site may vary slightly by location
                        and in stadium, event venues and international locations.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
