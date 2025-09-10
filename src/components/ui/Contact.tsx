"use client";

import { FC } from "react";
import { Mail, MapPin, Linkedin, Github, Rss } from "lucide-react";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-12 border-t"
    >
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Mail className="w-5 h-5" /> Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            your.email@example.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            Based in Anywhere
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-3 text-blue-600 font-medium">
          <a
            href="#"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:underline"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:underline"
          >
            <Rss className="w-4 h-4" /> Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
