import React from "react";
import { Activity, Github, Twitter, Linkedin, Mail, ChevronRight } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "API Reference", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Release Notes", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Community", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Status", href: "#" },
      { label: "Videos & Tutorials", href: "#" },
      { label: "Partner Program", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-primary-500 mr-2" />
              <span className="text-xl font-bold text-white">RequestLane</span>
            </div>
            <p className="mb-6 leading-relaxed">The complete platform for API development, testing, and monitoring. Build better APIs, faster.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">{category}</h3>
              <ul className="space-y-3">
                {items.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="inline-flex items-center hover:text-primary-400 transition-colors">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {currentYear} RequestLane. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm hover:text-primary-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm hover:text-primary-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm hover:text-primary-400 transition-colors">
                Cookies
              </a>
              <a href="#" className="flex items-center text-sm hover:text-primary-400 transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
