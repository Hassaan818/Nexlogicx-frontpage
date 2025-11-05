"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sectionIds = ["home", "features", "pricing", "contact"];

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        let ticking = false;

        const update = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section based on fixed header offset
            const headerOffset = 96; // keep in sync with CSS scroll-margin-top
            const probeY = headerOffset + 8; // small tolerance

            let currentId = activeSection;
            let fallbackId = activeSection;
            let fallbackDistance = Infinity;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();

                // Primary: section occupying the area just below header
                const inViewportBand = rect.top <= probeY && rect.bottom > probeY;
                if (inViewportBand) {
                    currentId = id;
                    break;
                }

                // Fallback: nearest section top to header line
                const distanceTop = Math.abs(rect.top - probeY);
                if (distanceTop < fallbackDistance) {
                    fallbackDistance = distanceTop;
                    fallbackId = id;
                }
            }

            const next = currentId || fallbackId;
            if (next && next !== activeSection) {
                setActiveSection(next);
            }
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [activeSection]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        if (menuOpen) {
            document.addEventListener("keydown", onKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen]);

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
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {scrolled ? (
                        <div className="w-full backdrop-blur-md bg-white/30 border border-white/40 shadow-lg rounded-2xl">
                            <div className="flex items-center justify-between gap-6 px-4 py-2">
                                <a href="/" className="flex items-center">
                                    <img src="/header-logo.webp" alt="Logo" className="h-8 w-auto" />
                                </a>
                                <nav className="hidden md:flex items-center gap-8">
                                    <a href="#home" onClick={(e) => handleNavClick(e, "home")} className={`${activeSection === "home" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"}`}>
                                        Home
                                    </a>
                                    <a
                                        href="#features"
                                        onClick={(e) => handleNavClick(e, "features")}
                                        className={`${activeSection === "features" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"} transition-colors`}
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#pricing"
                                        onClick={(e) => handleNavClick(e, "pricing")}
                                        className={`${activeSection === "pricing" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"} transition-colors`}
                                    >
                                        Pricing
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleNavClick(e, "contact")}
                                        className={`${activeSection === "contact" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"} transition-colors`}
                                    >
                                        Contact
                                    </a>
                                </nav>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="hidden md:inline-block bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645]
                         text-white font-semibold rounded-full px-6 py-2 text-sm
                         shadow-md hover:opacity-90 transition-all"
                                    >
                                        GET STARTED
                                    </button>
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className={`md:hidden p-2 rounded-md transition-all duration-300 hover:bg-white/40`}
                                    >
                                        {menuOpen ? <X size={24} color="#F34B1E" /> : <Menu size={24} color="#F34B1E" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between gap-6">
                            {/* Logo Capsule */}
                            <div
                                className={`backdrop-blur-md border rounded-full px-6 py-2 flex items-center transition-all duration-300 ${scrolled
                                        ? "bg-white/30 border-white/40 shadow-lg"
                                        : "bg-white/10 border-white/60"
                                    }`}
                            >
                                <a href="/">
                                    <img src="/header-logo.webp" alt="Logo" className="h-8 w-auto" />
                                </a>
                            </div>

                            {/* Navigation Capsule */}
                            <nav
                                className={`hidden md:flex items-center justify-center gap-8 backdrop-blur-md border rounded-full px-10 py-2 transition-all duration-300 ${scrolled
                                        ? "bg-white/30 border-white/40 shadow-lg"
                                        : "bg-white/10 border-white/60"
                                    }`}
                            >
                                <a href="#home" onClick={(e) => handleNavClick(e, "home")} className={`${activeSection === "home" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"}`}>
                                    Home
                                </a>
                                <a
                                    href="#features"
                                    onClick={(e) => handleNavClick(e, "features")}
                                    className={`${activeSection === "features" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"} transition-colors`}
                                >
                                    Features
                                </a>
                                <a
                                    href="#pricing"
                                    onClick={(e) => handleNavClick(e, "pricing")}
                                    className={`${activeSection === "pricing" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"} transition-colors`}
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "contact")}
                                    className={`${activeSection === "contact" ? "text-[#F34B1E] font-semibold" : "text-[#1A1A1A] hover:text-[#F34B1E] font-medium"} transition-colors`}
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
                                className={`md:hidden p-2 rounded-md transition-all duration-300 hover:bg-gray-100`}
                            >
                                {menuOpen ? <X size={24} color="#F34B1E" /> : <Menu size={24} color="#F34B1E" />}
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="fixed inset-0 md:hidden z-[60]">
                        <button
                            aria-label="Close menu overlay"
                            onClick={() => setMenuOpen(false)}
                            className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-md"
                        />
                        <div className="absolute right-0 top-0 h-full w-72 max-w-[80%]">
                            <div className="h-full bg-white/70 backdrop-blur-xl border-l border-white/40 shadow-xl p-6 transform transition-transform duration-300 ease-out translate-x-0">
                                <div className="flex items-center justify-between mb-6">
                                    <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
                                        <img src="/header-logo.webp" alt="Logo" className="h-7 w-auto" />
                                    </a>
                                    <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md hover:bg-white/60">
                                        <X size={22} color="#F34B1E" />
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-4">
                                    <a
                                        href="#home"
                                        onClick={(e) => { handleNavClick(e, "home"); setMenuOpen(false); }}
                                        className={`${activeSection === "home" ? "text-[#F34B1E] font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}`}
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#features"
                                        onClick={(e) => { handleNavClick(e, "features"); setMenuOpen(false); }}
                                        className={`${activeSection === "features" ? "text-[#F34B1E] font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}`}
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#pricing"
                                        onClick={(e) => { handleNavClick(e, "pricing"); setMenuOpen(false); }}
                                        className={`${activeSection === "pricing" ? "text-[#F34B1E] font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}`}
                                    >
                                        Pricing
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={(e) => { handleNavClick(e, "contact"); setMenuOpen(false); }}
                                        className={`${activeSection === "contact" ? "text-[#F34B1E] font-medium" : "text-gray-700 hover:text-gray-900 font-medium"}`}
                                    >
                                        Contact
                                    </a>
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="mt-4 bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645] text-white font-semibold rounded-full py-2 shadow-md hover:opacity-90 transition-all"
                                    >
                                        GET STARTED
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <div className="relative z-10 pt-32 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-3 backdrop-blur-lg bg-white/30 border border-[#F9D7C2] px-3 py-1 rounded-full text-sm font-medium shadow-lg">
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
                            src="/dashboard-image.webp"
                            alt="Nexlogicx Dashboard"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}