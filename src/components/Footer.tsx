"use client";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-8 border-t text-sm text-gray-500 flex justify-between items-center">
      <p>© 2025 Your Name. All rights reserved.</p>
      <div className="flex gap-4 text-gray-400">
        <a href="#" className="hover:text-gray-700">Privacy</a>
        <a href="#" className="hover:text-gray-700">Terms</a>
        <a href="#" className="hover:text-gray-700">RSS</a>
      </div>
    </footer>
  );
};

export default Footer;
