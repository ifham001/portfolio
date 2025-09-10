"use client";

import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 font-semibold text-lg">
        <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full">
          FD
        </div>
        Full-Stack Developer
      </div>
      <nav className="flex gap-6 text-gray-600 font-medium">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
