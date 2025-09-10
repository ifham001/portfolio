"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Mail } from "lucide-react";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <Badge>Portfolio</Badge>
      <h1 className="text-4xl font-bold mt-4">Your Name</h1>
      <p className="text-lg text-gray-600 mt-2">
        Building reliable, scalable web products from idea to production.
      </p>
      <div className="flex gap-4 mt-6">
        <Button>
          <Globe className="w-4 h-4 mr-2" /> View Projects
        </Button>
        <Button variant="outline">
          <Mail className="w-4 h-4 mr-2" /> Get in touch
        </Button>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Available for freelance and full-time roles
      </p>
    </section>
  );
};

export default Hero;
