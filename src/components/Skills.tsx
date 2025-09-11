"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";
import { FC } from "react";

// Import react-icons (SimpleIcons pack)
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
  SiRedux,
  SiExpress,
  SiHono,
  SiDrizzle,
  SiMongoose,
  SiDragonframe,

} from "react-icons/si";

// Skill type
interface Skill {
  name: string;
  icon: FC<{ className?: string }>;
  color: string;
}

const skills = {
  frontend: [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "black" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    {name:"Redux",icon:SiRedux,color:"#black"},
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },

  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#3776AB" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "REST", icon: SiStrapi, color: "#FF6F00" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Hono", icon: SiHono, color: "orange" },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
  
  ],
  tools: [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Drizzle-orm", icon: SiDrizzle, color: "#326CE5" },
    { name: "Mongoose", icon: SiMongoose, color: "#FF9900" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Gorm", icon: SiDragonframe, color: "#7B42BC" },
  ],
};

const Skills: FC = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-12 border-t">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Wrench className="w-5 h-5" /> Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Frontend */}
        <Card>
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-around gap-5">
  {skills.frontend.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 text-sm w-1/3" // 👈 ensures 3 per row
    >
      <skill.icon
        className="w-5 h-5"
        style={{ color: skill.color }}
      />
      <span>{skill.name}</span>
    </div>
  ))}
</CardContent>

        </Card>

        {/* Backend */}
        <Card>
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-around gap-5">
  {skills.backend.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 text-sm w-1/3" // 👈 ensures 3 per row
    >
      <skill.icon
        className="w-5 h-5"
        style={{ color: skill.color }}
      />
      <span>{skill.name}</span>
    </div>
  ))}
</CardContent>
        </Card>

        {/* Databases */}
        <Card>
          <CardHeader>
            <CardTitle>Databases</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-around gap-5">
  {skills.databases.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 text-sm w-1/3" // 👈 ensures 3 per row
    >
      <skill.icon
        className="w-5 h-5"
        style={{ color: skill.color }}
      />
      <span>{skill.name}</span>
    </div>
  ))}
</CardContent>
        </Card>

        {/* Tools & Cloud */}
        <Card>
          <CardHeader>
            <CardTitle>Tools & Cloud</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-around gap-5">
  {skills.tools.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 text-sm w-1/3" // 👈 ensures 3 per row
    >
      <skill.icon
        className="w-5 h-5"
        style={{ color: skill.color }}
      />
      <span>{skill.name}</span>
    </div>
  ))}
</CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
