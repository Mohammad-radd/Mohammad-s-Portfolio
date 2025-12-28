import { ArrowDown } from "lucide-react";

export function HeroSection(){
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Mohammad
            </span>
            <span className=" opacity-0 animate-fade-in-delay-2"> Rad</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#skills" className="cosmic-button"> View my skills</a>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2  opacity-0 animate-fade-in-delay-5">
      <div className="flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      </div>
    </section>
  );
};
