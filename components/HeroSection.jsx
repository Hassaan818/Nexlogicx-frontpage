"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full overflow-hidden bg-[#FFF9F5] bg-cover bg-center"
            style={{
                backgroundImage: "url('/background.svg')",
            }}
        >
            {/* ===== HEADER ===== */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "py-3" : "py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
                    {/* Logo Capsule */}
                    <div
                        className={`backdrop-blur-md border rounded-full px-6 py-2 flex items-center transition-all duration-300 ${
                            scrolled
                                ? "bg-white/30 border-white/40 shadow-lg"
                                : "bg-white/10 border-white/60"
                        }`}
                    >
                        <a href="/">
                            <img src="/header-logo.png" alt="Logo" className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Navigation Capsule */}
                    <nav
                        className={`hidden md:flex items-center justify-center gap-8 backdrop-blur-md border rounded-full px-10 py-2 transition-all duration-300 ${
                            scrolled
                                ? "bg-white/30 border-white/40 shadow-lg"
                                : "bg-white/10 border-white/60"
                        }`}
                    >
                        <a href="#home" className="text-[#F34B1E] font-semibold">
                            Home
                        </a>
                        <a
                            href="#features"
                            className="text-[#1A1A1A] hover:text-[#F34B1E] font-medium transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="text-[#1A1A1A] hover:text-[#F34B1E] font-medium transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className="text-[#1A1A1A] hover:text-[#F34B1E] font-medium transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* CTA Capsule */}
                    <button
                        className="hidden md:inline-block bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645]
                 text-white font-semibold rounded-full px-6 py-2 text-sm
                 shadow-md hover:opacity-90 transition-all"
                    >
                        GET STARTED
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden p-2 rounded-md transition-all duration-300 ${
                            scrolled ? "hover:bg-white/40" : "hover:bg-gray-100"
                        }`}
                    >
                        {menuOpen ? <X size={24} color="#F34B1E" /> : <Menu size={24} color="#F34B1E" />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-lg">
                        <nav className="flex flex-col px-6 py-4 space-y-4">
                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                                className="text-[#F34B1E] font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-700 hover:text-gray-900 font-medium"
                            >
                                Features
                            </a>
                            <a
                                href="#pricing"
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-700 hover:text-gray-900 font-medium"
                            >
                                Pricing
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-700 hover:text-gray-900 font-medium"
                            >
                                Contact
                            </a>

                            {/* Mobile CTA */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645]
                     text-white font-semibold rounded-full py-2
                     shadow-md hover:opacity-90 transition-all"
                            >
                                GET STARTED
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            <div className="relative z-10 pt-32 md:pt-48 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-[#FEEFE7] border border-[#F9D7C2] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        <span className="bg-[#F34B1E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            New
                        </span>
                        <span className="text-[#131313]">
                            We've just released a new feature →
                        </span>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#112967] leading-tight">
                        Encourage Your <span className="text-[#F34B1E]">Sales</span>
                        <br /> Team to Excel
                    </h1>
                    <p className="text-[#5C6A8D] text-lg md:text-xl max-w-2xl mx-auto mt-6">
                        Our goal is to make business operations easier, from managing daily
                        sales to tracking inventory, all through one intuitive platform.
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    <button
                        className="bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645]
                       text-white font-semibold rounded-full px-8 py-3 text-base
                       shadow-lg hover:opacity-90 transition-all"
                    >
                        GET STARTED
                    </button>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                        <img
                            src="/dashboard-image.png"
                            alt="Nexlogicx Dashboard"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Add extra content to enable scrolling in demo */}
            <div className="h-screen"></div>
        </section>
    );
}