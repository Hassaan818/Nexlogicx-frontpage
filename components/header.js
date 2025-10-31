"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for menu icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/header-logo.png" alt="Logo" className="h-8 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-[#F34B1E] font-medium">
            Home
          </a>
          <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <button
          className="hidden md:inline-block bg-gradient-to-r from-[#EA5C1A] via-[#F47230] to-[#FD8645]
                     text-white font-semibold rounded-full px-5 py-2 text-sm
                     shadow-md hover:opacity-90 transition-all"
        >
          GET STARTED
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          {menuOpen ? <X size={24} color="#F34B1E" /> : <Menu size={24} color="#F34B1E" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-down">
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

            {/* Mobile Get Started button */}
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
  );
}
