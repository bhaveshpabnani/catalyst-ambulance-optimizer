
import React from "react";

const StatCard: React.FC<{
  value: string;
  label: string;
  color: string;
  delay: string;
}> = ({ value, label, color, delay }) => {
  return (
    <div 
      className={`invisible rounded-xl ${color} p-6 text-center transform transition-all duration-500`}
      style={{ transitionDelay: delay }}
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-2">{value}</h3>
      <p className="text-sm font-medium opacity-80">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 invisible">
          <span className="text-catalyst-600 font-semibold uppercase tracking-wider text-sm">The Problem We're Solving</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ambulance Response Time Challenges</h2>
          <div className="w-20 h-1 bg-catalyst-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="invisible bg-white rounded-xl border border-gray-100 p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">24,000 Deaths Daily</h3>
                <p className="text-gray-600">65% of daily deaths in India are due to delayed ambulance response</p>
              </div>
            </div>
          </div>

          <div className="invisible bg-white rounded-xl border border-gray-100 p-6 shadow-md" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">40 Minutes Average</h3>
                <p className="text-gray-600">India's mean ambulance response time is 4x slower than global standards</p>
              </div>
            </div>
          </div>

          <div className="invisible bg-white rounded-xl border border-gray-100 p-6 shadow-md" style={{ transitionDelay: "0.4s" }}>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7.5V6.75C21 5.23122 19.7688 4 18.25 4H5.75C4.23122 4 3 5.23122 3 6.75V7.5M21 7.5V18.75C21 20.2688 19.7688 21.5 18.25 21.5H5.75C4.23122 21.5 3 20.2688 3 18.75V7.5M21 7.5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9.75 13.5C9.75 14.7426 8.74264 15.75 7.5 15.75C6.25736 15.75 5.25 14.7426 5.25 13.5C5.25 12.2574 6.25736 11.25 7.5 11.25C8.74264 11.25 9.75 12.2574 9.75 13.5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14.25 13.5H18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">5% Time Wasted</h3>
                <p className="text-gray-600">Of India's ambulance time wasted in manual mapping processes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            value="57%"
            label="Traffic Congestion Impact"
            color="bg-gradient-to-br from-red-500/90 to-red-600/90 text-white"
            delay="0s"
          />
          <StatCard
            value="28%"
            label="Infrastructure Problems"
            color="bg-gradient-to-br from-amber-500/90 to-amber-600/90 text-white"
            delay="0.2s"
          />
          <StatCard
            value="15%"
            label="Other Delay Factors"
            color="bg-gradient-to-br from-blue-500/90 to-blue-600/90 text-white"
            delay="0.4s"
          />
          <StatCard
            value="100%"
            label="Solvable with Catalyst"
            color="bg-gradient-to-br from-catalyst-500/90 to-catalyst-600/90 text-white"
            delay="0.6s"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
