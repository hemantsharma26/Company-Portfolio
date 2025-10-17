import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AstroRun",
      description:
        "Unity 2D arcade-style endless runner game for Android with space theme and power-ups.",
      tags: ["Unity", "C#", "2D Game", "Android"],
      image:
        "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "AI TutorBot",
      description:
        "Python-based educational chatbot using NLP and machine learning for personalized learning.",
      tags: ["Python", "FastAPI", "AI/ML", "NLP"],
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "FitGo Web",
      description:
        "MERN stack fitness booking platform with real-time availability and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Product Reel 3D",
      description:
        "Blender 3D animation showcasing eCommerce shoe products with dynamic camera movements.",
      tags: ["Blender", "3D Animation", "Product Demo", "Motion Graphics"],
      image:
        "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "QuizMaster App",
      description:
        "Flutter-based mobile quiz game with multiplayer support and real-time leaderboards.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile Game"],
      image:
        "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Explore our diverse range of projects spanning web development, game creation, and 3D
            animation work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="group/btn">
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
