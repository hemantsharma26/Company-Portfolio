import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Clock, TrendingUp, Lightbulb, MapPin, Briefcase, CheckCircle } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Fun Culture",
      description: "Creative workspace with game rooms and flexible work environment",
    },
    {
      icon: Clock,
      title: "Flexible Work",
      description: "Remote-first approach with flexible hours that work for you",
    },
    {
      icon: TrendingUp,
      title: "Creative Growth",
      description: "Learn from diverse projects spanning web, games, and animation",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Work with cutting-edge technologies and contribute to R&D",
    },
  ];

  const openings = [
    {
      title: "React.js Developer",
      location: "Remote",
      type: "Full-time",
      status: "Open",
      description:
        "Join our frontend team to build engaging web applications using modern React patterns and best practices.",
      requirements: ["React.js", "TypeScript", "Node.js", "MongoDB", "2+ years exp"],
    },
    {
      title: "Unity Game Designer",
      location: "Remote",
      type: "Full-time",
      status: "Open",
      description:
        "Create immersive gaming experiences for PC and mobile platforms with our talented game development team.",
      requirements: ["Unity 3D", "C#", "Game Design", "Mobile Games", "3+ years exp"],
    },
    {
      title: "Blender Animator (Intern)",
      location: "Remote, Paid Internship",
      type: "Internship",
      status: "Open",
      description:
        "Learn professional 3D animation techniques while working on real client projects and building your portfolio.",
      requirements: ["Blender", "3D Animation", "Character Modeling", "Portfolio Required"],
    },
  ];

  return (
    <section id="careers" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Be part of a creative and innovative team that's pushing the boundaries of technology
            and digital storytelling.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Work at Boshaan?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-foreground/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Current Openings</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                    <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {job.status}
                      </div>
                    </div>
                  </div>
                  <Button variant="default">Apply Now</Button>
                </div>
                <p className="text-foreground/70 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
