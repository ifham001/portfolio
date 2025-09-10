"use client";

import { FC } from "react";
import { User } from "lucide-react";

const About: FC = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <User className="w-5 h-5" /> About
      </h2>
      <p className="text-gray-700 leading-relaxed">
        I am a full-stack developer focused on building clean, maintainable
        products. I enjoy working across the stack—from crisp, accessible UIs
        to robust APIs and cloud infrastructure. I value simplicity, clear
        communication, and results.
      </p>
    </section>
  );
};

export default About;
