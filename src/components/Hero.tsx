import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold">Boshaan Technology</span>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Crafting Code, <span className="gradient-text">Characters</span>
          <br />& Creative Worlds
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
          We blend cutting-edge software development with game creation and 3D animation to bring
          your digital visions to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="hero" className="group">
            Explore Portfolio
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="hero-outline" className="group">
            <PlayCircle className="mr-2" />
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
