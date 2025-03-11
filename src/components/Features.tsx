
import React from "react";
import FeatureCard from "./FeatureCard";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-catalyst-600 font-semibold uppercase tracking-wider text-sm">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Innovative Solutions</h2>
          <div className="w-20 h-1 bg-catalyst-500 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Catalyst combines cutting-edge technology with practical solutions to revolutionize emergency response services.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Smart Communication</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10.5 8.5L13.5 11.5L10.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Smart Receiver"
              description="Guides callers through pre-recordings in regional languages, with option to shift to a manual receiver if needed."
              category="Communication"
            />
            
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Remote Treatment Support"
              description="HD-CCTV setup with network connectivity inside ambulances to provide remote instructions to people accompanying patients."
              category="Communication"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Intelligent Mapping Technology</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              }
              title="Smart Ambulance Mapping"
              description="Using GPS and tracking, we map the nearest available ambulance that suits the specific emergency requirements."
              category="Mapping"
            />
            
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7V5C4 3.89543 4.89543 3 6 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H6C4.89543 21 4 20.1046 4 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 12H5C3.89543 12 3 11.1046 3 10V8C3 6.89543 3.89543 6 5 6H15C16.1046 6 17 6.89543 17 8V10C17 11.1046 16.1046 12 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="7" cy="9" r="1" fill="currentColor"/>
                  <circle cx="13" cy="9" r="1" fill="currentColor"/>
                </svg>
              }
              title="Smart Enrouting"
              description="Considers future road closures, dynamic traffic prediction, and alternate paths to predict the fastest route to patients."
              category="Mapping"
            />
            
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 20H7C5.89543 20 5 19.1046 5 18V9C5 7.89543 5.89543 7 7 7H9M9 20V7M9 20H15M9 7H15M15 20H17C18.1046 20 19 19.1046 19 18V9C19 7.89543 18.1046 7 17 7H15M15 20V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 7V4M12 4H10M12 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Multiple Options"
              description="Select the best suitable ambulance option based on response time and pricing from government or private providers."
              category="Options"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Performance & Future Planning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0793 13.7988L7.58193 10.3014L4.08455 13.7988M7.58193 11.3312V19.4338" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.9211 10.2013L16.4184 13.6986L19.9158 10.2013M16.4184 12.6688V4.56616" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Smart Review"
              description="Upon journey completion, representatives are asked for reviews with follow-up reminders for continuous service improvement."
              category="Analytics"
            />
            
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Notifier (Phase II)"
              description="Notifies traffic control authorities and the public about upcoming ambulances through integrated map services."
              category="Future"
            />
            
            <FeatureCard
              icon={
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Smart Relocation (Phase II)"
              description="Based on large datasets, optimizes ambulance network access for increased framework robustness."
              category="Future"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Planning (Phase II)</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            With extensive datasets, Catalyst will enable the establishment of new warehouses with targeted ambulance types in urban regions
            and mobile hospitals with specialized ambulances to further improve emergency response capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
