import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Layers, User } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To be the go-to partner for startups and enterprises seeking innovative digital solutions that blend technical excellence with creative storytelling.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative approaches to solve complex problems and create memorable digital experiences.",
    },
    {
      icon: Layers,
      title: "Technical Fusion",
      description:
        "Our unique blend of web development, game creation, and 3D animation allows us to deliver comprehensive digital solutions under one roof.",
    },
  ];

  const team = [
    {
      name: "Arpit Singh",
      role: "CEO & Full Stack Developer",
      quote: "Code with passion, innovate with purpose",
    },
    {
      name: "Hemant Sharma",
      role: "CTO & Game Developer",
      quote: "Building worlds one pixel at a time",
    },
    {
      name: "Buddh Sharma",
      role: "Lead 3D Animator",
      quote: "Bringing imagination to life through motion",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Boshaan</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Born from a vision to merge technology with creativity, Boshaan Technology started as a
            small startup with big dreams and has grown into a dynamic force in software development
            and digital creation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover-glow"
            >
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <p className="text-foreground/60 italic">"{member.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
