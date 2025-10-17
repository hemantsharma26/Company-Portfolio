import { Card } from "@/components/ui/card";
import { Code, Gamepad2, Box, Brain, Server, Smartphone, Coffee, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "MERN Stack / MEAN Stack",
      description:
        "Full-stack web applications using MongoDB, Express, React, Angular, and Node.js for scalable solutions.",
    },
    {
      icon: Gamepad2,
      title: "Unity Game Dev",
      description:
        "2D/3D game development for PC and mobile platforms with engaging gameplay mechanics.",
    },
    {
      icon: Box,
      title: "Blender Animation",
      description:
        "Professional 3D animations, character modeling, and product visualization services.",
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description:
        "Intelligent applications using Python, TensorFlow, and modern machine learning frameworks.",
    },
    {
      icon: Server,
      title: "Laravel Development",
      description:
        "Robust PHP web applications with Laravel framework for enterprise-grade solutions.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Cross-platform mobile applications using Flutter and React Native technologies.",
    },
    {
      icon: Coffee,
      title: "Spring Boot (Java)",
      description:
        "Microservices and enterprise applications built with Java Spring Boot framework.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design systems and interfaces that create exceptional user experiences.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            From web development to game creation and 3D animation, we offer comprehensive digital
            solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover-glow group"
            >
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-foreground/70">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
