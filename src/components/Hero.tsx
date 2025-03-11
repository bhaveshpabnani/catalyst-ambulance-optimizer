
import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-catalyst-50"></div>
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-catalyst-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[5%] w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-[30%] left-[20%] w-16 h-16 bg-catalyst-200 rounded-full opacity-20"></div>
        <div className="absolute top-[60%] right-[30%] w-24 h-24 bg-blue-100 rounded-full opacity-15"></div>
        <div className="absolute top-[15%] left-[40%] w-8 h-8 bg-catalyst-300 rounded-full opacity-10"></div>
        
        {/* Abstract Shapes */}
        <div className="absolute bottom-[30%] right-[15%] w-32 h-4 bg-catalyst-100 rounded-full opacity-30 rotate-45"></div>
        <div className="absolute top-[40%] right-[25%] w-4 h-32 bg-blue-100 rounded-full opacity-20 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-gray-800">Optimizing</span>
                <span className="bg-gradient-to-r from-catalyst-600 to-catalyst-400 bg-clip-text text-transparent"> Ambulance Journeys</span>
                <span className="text-gray-800"> to Save Lives</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Catalyst revolutionizes emergency response with intelligent mapping, traffic optimization, dynamic routing, and hospital selection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="cta-button flex items-center justify-center">
                  <span>Book Now</span>
                </Link>
                <Link to="/login" className="secondary-button flex items-center justify-center">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  <span>Call for Assistance</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-square md:aspect-auto md:h-[480px] bg-gradient-to-br from-catalyst-500 to-catalyst-600 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 aspect-video rounded-xl bg-white/90 backdrop-blur-sm shadow-lg p-8 flex flex-col items-center justify-center">
                      <div className="mb-4 p-4 rounded-full bg-catalyst-100">
                        <svg className="h-12 w-12 text-catalyst-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 16V7C19 5.9 18.1 5 17 5H14V4C14 3.4 13.6 3 13 3H7C6.4 3 6 3.4 6 4V5H3C1.9 5 1 5.9 1 7V16C1 17.1 1.9 18 3 18H4L4 21H6L6 18H14L14 21H16L16 18H17C18.1 18 19 17.1 19 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 14H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M2 9H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7 Emergency Response</h3>
                      <p className="text-center text-gray-600">Our smart system ensures the fastest possible emergency response using cutting-edge technology.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-catalyst-200 rounded-lg -z-10 opacity-70"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-lg -z-10 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
