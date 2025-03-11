
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  delay?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  image, 
  name, 
  role, 
  description, 
  linkedin,
  delay = "0s" 
}) => {
  return (
    <div 
      className="invisible bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500"
      style={{ transitionDelay: delay }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/90 text-sm">{role}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-800">{name}</h3>
        <p className="text-catalyst-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4 line-clamp-4">{description}</p>
        
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-catalyst-600 hover:text-catalyst-700"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            View Profile
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
