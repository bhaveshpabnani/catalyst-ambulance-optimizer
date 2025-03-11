
import React from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Activity } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-catalyst-600 font-semibold uppercase tracking-wider text-sm">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Reimagining Emergency Response</h2>
          <div className="w-20 h-1 bg-catalyst-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/Our_Team.avif" 
                  alt="Emergency medical service" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Cards */}
              <div className="absolute -bottom-10 -right-5 glass-card rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-rose-500" />
                  <div>
                    <p className="text-sm text-gray-500">Response Time</p>
                    <p className="font-bold text-gray-800">Under 15 mins</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -left-8 glass-card rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-catalyst-500" />
                  <div>
                    <p className="text-sm text-gray-500">Lives Saved</p>
                    <p className="font-bold text-gray-800">24,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Transforming Emergency Healthcare with Technology</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Catalyst is a tech-based sustainable system designed to revolutionize ambulance journeys. 
              We optimize every aspect of emergency response through automatic mapping, traffic prediction, 
              dynamic routing, and intelligent hospital selection.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our platform brings together all ambulance services, creating a unified system that significantly 
              reduces response times and saves more lives. With real-time data and AI-powered decision making, 
              Catalyst ensures that emergency medical teams arrive faster and more efficiently than ever before.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-catalyst-100 p-2 rounded-full text-catalyst-600 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Smart Mapping</h4>
                  <p className="text-gray-600">Advanced GPS to locate and dispatch the nearest available ambulance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-catalyst-100 p-2 rounded-full text-catalyst-600 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dynamic Routing</h4>
                  <p className="text-gray-600">Real-time traffic analysis to find the fastest path to patients</p>
                </div>
              </div>
            </div>
            
            <Link to="/login" className="cta-button inline-block">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
