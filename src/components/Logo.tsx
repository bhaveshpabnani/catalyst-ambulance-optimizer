
import React from "react";
import { Ambulance } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <Ambulance className="h-8 w-8 text-catalyst-500" />
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-catalyst-300 rounded-full animate-ping-slow" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-catalyst-600 to-catalyst-400 bg-clip-text text-transparent">
        Catalyst
      </span>
    </Link>
  );
};

export default Logo;
