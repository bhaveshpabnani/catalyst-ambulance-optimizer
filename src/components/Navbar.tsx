
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Our Product", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Team", href: "/#team" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Remove the # from the href
    const id = sectionId.replace("#", "");
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-700 hover:text-catalyst-600 font-medium hover-underline"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-catalyst-600 font-medium px-4 py-2 rounded-lg hover:bg-catalyst-50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/login"
              className="cta-button"
            >
              Book Now
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-gray-700 hover:text-catalyst-600 font-medium py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-3 pt-2">
            <Link
              to="/login"
              className="text-catalyst-600 font-medium text-center w-full px-4 py-2 rounded-lg border border-catalyst-200"
            >
              Login
            </Link>
            <Link
              to="/login"
              className="cta-button text-center w-full"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
