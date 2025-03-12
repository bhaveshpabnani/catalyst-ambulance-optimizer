
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ChevronDown, Menu, X, UserPlus, User, LogOut } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

interface ServiceItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Our Product", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Team", href: "/#team" },
];

const serviceItems: ServiceItem[] = [
  { label: "Basic Ambulance", href: "/#services" },
  { label: "Advance/Cardiac Ambulance", href: "/#services" },
  { label: "Air Ambulance", href: "/#services" },
  { label: "Ambulance For Events", href: "/#services" },
  { label: "Hearse Ambulance", href: "/#services" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkUser = () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        setIsLoggedIn(true);
        setUserData(user);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    setIsProfileOpen(false);
    window.location.reload(); // Refresh to update all components
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef]);

  // Add this to your existing useEffect blocks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  const location = useLocation();
  const navigate = useNavigate();

  // Update the scrollToSection function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Remove the /# from the href
    const id = sectionId.replace("/#", "");
    
    if (location.pathname !== "/") {
      // If we're not on the home page, navigate to home and then scroll
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 20,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // If we're on the home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 20,
          behavior: "smooth"
        });
      }
    }
    
  };

  const renderAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <div className="flex items-center space-x-4">
          <Link
            to="/register"
            className="bg-white border border-catalyst-500 text-catalyst-600 font-medium rounded-lg px-4 py-2 flex items-center transition-colors hover:bg-catalyst-50"
          >
            <UserPlus size={18} className="mr-2" />
            Register
          </Link>
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-catalyst-600"
            >
              <div className="w-8 h-8 rounded-full bg-catalyst-100 flex items-center justify-center">
                {userData?.photoURL ? (
                  <img src={userData.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <User size={20} className="text-catalyst-600" />
                )}
              </div>
              <span className="font-medium">{userData?.displayName || 'Profile'}</span>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/profile"
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-catalyst-50 hover:text-catalyst-600 flex items-center"
                >
                  <User size={16} className="mr-2" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-catalyst-50 hover:text-catalyst-600 flex items-center"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="text-catalyst-600 font-medium px-4 py-2 rounded-lg hover:bg-catalyst-50 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-white border border-catalyst-500 text-catalyst-600 font-medium rounded-lg px-4 py-2 flex items-center transition-colors hover:bg-catalyst-50"
        >
          <UserPlus size={18} className="mr-2" />
          Sign Up
        </Link>
      </div>
    );
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
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-catalyst-600 font-medium focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-64 z-20">
                  {serviceItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                        setIsServicesOpen(false);
                      }}
                      className="block px-4 py-2 text-gray-700 hover:bg-catalyst-50 hover:text-catalyst-600"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          {renderAuthButtons()} {/* Replace the old auth buttons with this */}
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
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
          
          {/* Mobile Services Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center text-gray-700 hover:text-catalyst-600 font-medium w-full text-left"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {serviceItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 text-gray-600 hover:text-catalyst-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          // Update the mobile menu auth buttons section
          <div className="flex flex-col space-y-3 pt-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/register"
                  className="bg-white border border-catalyst-500 text-catalyst-600 font-medium text-center w-full px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  <UserPlus size={18} className="mr-2" />
                  Register
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-catalyst-600 font-medium text-center w-full px-4 py-2 rounded-lg border border-catalyst-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-catalyst-600 font-medium text-center w-full px-4 py-2 rounded-lg border border-catalyst-200"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-white border border-catalyst-500 text-catalyst-600 font-medium text-center w-full px-4 py-2 rounded-lg flex items-center justify-center"
                >
                  <UserPlus size={18} className="mr-2" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
