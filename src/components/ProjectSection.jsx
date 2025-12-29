import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Landing Page",
    description: "A responsive portfolio showcasing clean UI and performance, built to present myself.",
    image: "../../public/Projects/protfolio.png",
    tags: ["HTML", "TailwindCSS", "React"],
    demoUrl: "https://radd.ir/",
    githubUrl: "https://github.com/Mohammad-radd/Mohammad-s-Portfolio",
  },
  {
    id: 2,
    title: "NetAfzar Inspired Landing",
    description:
      "My first project to improve my web design skills, inspired by NetAfzar website.",
    image: "../../public/Projects/netafzar.png",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mohammad-radd/Net-Afzar-copy.git",
  }

];

export function ProjectSection() {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent project. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
              <p className="text-muted-foreground text-sm"> {project.description}</p>
              </div>
              <div className="flex justify-between items-center bottom-0 p-3">
                <div className="">
                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <Github size={20}/>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="#" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" >
                Check My GitHub <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  );
}
