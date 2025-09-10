"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="text-xl font-semibold mb-6">Projects</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Project One — SaaS Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Designed and built a multi-tenant analytics dashboard with
              role-based access, real-time charts, and billing integration.
            </p>
            <div className="flex gap-4 mt-3 text-sm">
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                <Globe className="w-4 h-4" /> Live
              </a>
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Two — Marketing Site Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Static site generator with MDX support, instant previews, and
              headless CMS integration, optimized for Lighthouse scores.
            </p>
            <div className="flex gap-4 mt-3 text-sm">
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                <Globe className="w-4 h-4" /> Live
              </a>
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Three — Auth Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              JWT-based authentication and authorization service with OAuth
              providers, session management, and audit logging.
            </p>
            <div className="flex gap-4 mt-3 text-sm">
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                Docs
              </a>
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
