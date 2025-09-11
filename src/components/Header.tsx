"use client";

import { FC, useState } from "react";
import { Menu, X } from "lucide-react";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-5xl mx-auto">
      {/* Logo / Title */}
      <div className="flex items-center gap-2 font-semibold text-lg">
      
        Full-Stack Developer
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-6 text-gray-600 font-medium">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-black">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-black">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-black">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-black">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
