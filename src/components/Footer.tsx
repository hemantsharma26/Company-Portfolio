import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import logo from "@/assets/boshaan-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Careers", href: "#careers" },
    ],
    resources: [
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/boshantech", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/boshan_animation", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Boshaan Technology" className="h-10 w-auto" />
            </a>
            <p className="text-sm text-foreground/70 mb-4">
              Crafting innovative digital solutions that blend technology with creativity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>info@boshantech.in</li>
              <li>+91 8127588871</li>
              <li>Gali Number 4, Chhalera, Chhalera Bangar, Sector 44, Noida, Uttar Pradesh 201303</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/70">
            © {currentYear} Boshaan Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
