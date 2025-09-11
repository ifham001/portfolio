"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import {
 
  SiGithub,
  SiLinkedin
} from "react-icons/si";


const Hero: FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Profile photo */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="w-[250px] h-[250px] flex items-center justify-center bg-amber-400 rounded-full shadow-md">
          <Image
            src="/me2.png" // 👉 replace with your image in /public
            alt="Ifham Baig"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="text-center md:text-left">
        <Badge>Portfolio</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 tracking-wider">
          Ifham Baig
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2 max-w-xl">
          Building reliable, scalable web products from idea to production.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-6">
        <Button asChild className="w-full sm:w-auto">
  <Link href="#projects">
    <Globe className="w-4 h-4 mr-2" /> View Projects
  </Link>
</Button>
<Button asChild variant="outline" className="w-full sm:w-auto">
  <a href="mailto:ifhambaig001@gmail.com">
    <Mail className="w-4 h-4 mr-2" /> Get in touch
  </a>
</Button>

        </div>

        <p className="text-sm text-gray-500 mt-4">
          Available for freelance and full-time roles
        </p>
        <div className="flex justify-center md:justify-start gap-5 mt-6">
          <a
            href="https://github.com/ifham001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors text-2xl"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ifham-baig-317830184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
          >
            <SiLinkedin />
          </a>
        </div>
        </div>
    </section>
  );
};

export default Hero;
