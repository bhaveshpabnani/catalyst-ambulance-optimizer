
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
  category?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = "0s",
  category
}) => {
  return (
    <div 
      className="invisible feature-card group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ transitionDelay: delay }}
    >
      {category && (
        <span className="inline-block px-3 py-1 bg-catalyst-100 text-catalyst-600 rounded-full text-xs font-medium mb-4">
          {category}
        </span>
      )}
      <div className="mb-5 text-catalyst-500 group-hover:text-catalyst-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-catalyst-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="h-1 w-0 bg-catalyst-500 mt-4 transition-all duration-300 group-hover:w-1/3"></div>
    </div>
  );
};

export default FeatureCard;
