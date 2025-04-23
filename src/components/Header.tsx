import React, { useState, useEffect } from "react";
import { Menu, X, Activity } from "lucide-react";
import Button from "./ui/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-primary-600 mr-2" />
            <span className="text-xl font-bold text-neutral-900">RequestLane</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Demo
            </a>
            <a href="#pricing" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Testimonials
            </a>
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button variant="primary" size="sm">
              Start Free
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-neutral-700 hover:text-primary-600" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-slide-down">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <a href="#features" className="text-neutral-700 hover:text-primary-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#demo" className="text-neutral-700 hover:text-primary-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Demo
            </a>
            <a href="#pricing" className="text-neutral-700 hover:text-primary-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#testimonials" className="text-neutral-700 hover:text-primary-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" fullWidth>
                Log in
              </Button>
              <Button variant="primary" fullWidth>
                Start Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
