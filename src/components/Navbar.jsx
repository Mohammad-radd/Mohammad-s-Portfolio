import { useEffect, useState } from "react";
import { cn } from "../lib/ulits";
import { Menu, X } from "lucide-react";

const navItem = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#aboute" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export function Navbar(){
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handellScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handellScroll);
    return () => window.removeEventListener("scroll", handellScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadows-xsd"
          : "py-5"
      )}
    >
      <div className={cn("container flex items-center justify-between")}>
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Mohammad's</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktio nav */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-forground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        {/* <button
          className="cursor-pointer md:hidden text-foreground p-2 z-50"
          onClick={() => setIsMenuOpen((perv) => !perv)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-400 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-forground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </nav>
  );
};
