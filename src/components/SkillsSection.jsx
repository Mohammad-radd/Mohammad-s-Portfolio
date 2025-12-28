import { useState } from "react";
import { cn } from "../lib/ulits";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap CSS", level: 80, category: "frontend" },

  //Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];
const categories = ["all", "frontend", "tools"];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(( skill =>
    activeCategory === "all" || skill.category === activeCategory
  ))

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center mb-10  gap-4">
          {categories.map((category, index) => (
            <button key={index}
            onClick={() => setActiveCategory(category)}
            className={cn("px-5 py-2 capitalize cursor-pointer rounded-full transition-colors duration-300",
              activeCategory === category ? "text-primary-foreground bg-primary" : "bg-secondary/50 text-foreground hover:bg-secondary"
            )
            }
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-min-[20rem]">
          {filteredSkills.map((skill, index) => (
            <div className="bg-card p-6 rounded-lg shadow-xl card-hover ">
              <div key={index} className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full h-2 bg-secondary/90 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full animate-[grow-1.5s-ease-out] origin-left"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
