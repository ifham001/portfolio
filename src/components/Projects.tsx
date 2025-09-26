"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGit,
  SiGithubactions,
  SiTerraform,
  SiStrapi,
  SiTrpc,
  SiDrizzle,
  SiHono,
  SiExpress,
  SiMongoose,
} from "react-icons/si";

// Define project type
interface Project {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  docsLink?: string;
  tech: { title: string; icon: FC<{ className?: string }> }[];
}

// Project data
const projects: Project[] = [
  {
    title: "📚 Up Next (Learning Management System)",
    description:
      "A full-stack LMS for students, instructors, and admins. Features include course creation, video uploads, quizzes with auto-grading, progress tracking, and subscription-based payments.",
    image: "/up_next2.png",
    liveLink: "https://www.upnext-lms.xyz",
    githubLink: "https://github.com/ifham001/Up-Next-LMS_Platform",
    docsLink: "https://docs.upnext-lms.xyz", // added sample docs link
    tech: [
      { title: "Next.js", icon: SiNextdotjs },
      { title: "PostgreSQL", icon: SiPostgresql },
 
      { title: "Node.js", icon: SiNodedotjs },
      { title: "TailwindCSS", icon: SiTailwindcss },
      { title: "TypeScript", icon: SiTypescript },
      { title: "Hono", icon: SiHono },
      { title: "Drizzle-Orm", icon: SiDrizzle },
    ],
  },
  {
    title: "💎 Benominal (Jewelry Store)",
    description:
      "An e-commerce platform for stainless steel jewelry. Includes curated collections, cart system, product uploads with image previews, inventory management, and JWT authentication.",
    image: "/benominal.png",
    liveLink: "https://www.benominal.in",
    githubLink: "https://github.com/ifham001/benominal_jewelry_store",
    tech: [
      { title: "Next.js", icon: SiNextdotjs },
      { title: "MongoDB", icon: SiMongodb },
      { title: "TailwindCSS", icon: SiTailwindcss },
      { title: "Node.js", icon: SiNodedotjs },
      { title: "TypeScript", icon: SiTypescript },
      { title: "Express", icon: SiExpress },
      { title: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    title: "Reshape",
    description:
      "Redesigned the Reshape Systems website, showcasing their AI-powered risk analysis platform. Focused on a clean, professional UI with responsive layouts, modern components, and smooth user experience to highlight their mission of simplifying complex engineering workflows.",
    image: "/reshape.png",
    liveLink: "https://reshapesystem.vercel.app/",
    githubLink: "https://github.com/ifham001/reshape",
    tech: [
      { title: "Next.js", icon: SiNextdotjs },
    
      { title: "TailwindCSS", icon: SiTailwindcss },
      { title: "Node.js", icon: SiNodedotjs },
      { title: "TypeScript", icon: SiTypescript },
     
    ],
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-full max-w-lg hover:shadow-xl transition-shadow"
          >
            {/* Project Image */}
            <Link href={project.liveLink ?? "#"} target="_blank">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-t-xl object-cover w-full h-56"
              />
            </Link>

            {/* Project Info */}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm"
                  >
                    <tech.icon className="w-4 h-4 text-gray-700" />
                    <span>{tech.title}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-6">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Globe className="w-4 h-4" /> Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
