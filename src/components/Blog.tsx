import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How We Built a 3D Character with Blender + Unity Integration",
      category: "3D Animation",
      excerpt:
        "A comprehensive guide on our workflow for creating game-ready 3D characters, from Blender modeling to Unity implementation with optimized performance.",
      author: "Buddh Sharma",
      date: "January 15, 2025",
      image:
        "https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Top 5 MERN Projects to Try in 2025",
      category: "Web Development",
      excerpt:
        "Explore the most exciting MERN stack project ideas that will help you master modern web development and build impressive portfolio pieces.",
      author: "Arpit Singh",
      date: "January 10, 2025",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Why Startups Need Animation to Tell Better Stories",
      category: "Business",
      excerpt:
        "Discover how strategic use of animation can transform your startup's brand narrative and create deeper connections with your audience.",
      author: "Hemant Sharma",
      date: "January 5, 2025",
      image:
        "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Stay updated with our latest thoughts on technology, development practices, and industry
            trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto group/btn">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
