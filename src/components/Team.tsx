
import React from "react";
import TeamCard from "./TeamCard";

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-catalyst-600 font-semibold uppercase tracking-wider text-sm">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet the Innovators</h2>
          <div className="w-20 h-1 bg-catalyst-500 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our team of experts is passionate about leveraging technology to revolutionize emergency healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add delay classes to cards */}
          <div className="animate-on-scroll delay-200">
            <TeamCard 
              image="/assets/1719032267751.jpg"
              name="Preet Panchal"
              role="Co-Founder & CEO"
              description="Preet is a third-year student pursuing Ocean Engineering and Naval Architecture with expertise in entrepreneurship and data analysis. He has significant experience in strategy development and business operations."
              linkedin="https://www.linkedin.com/in/preet-panchal-/https://www.linkedin.com/in/preet-panchal-/"
            />
          </div>
          <div className="animate-on-scroll delay-400">
            <TeamCard 
              image="/assets/1737141751071.jpg"
              name="Anushika Srivastava"
              role="Co-Founder"
              description="Anushika is pursuing Integrated B.Tech and M.Tech in Ocean Engineering at IIT Kharagpur. As General Secretary of the Students' Branding and Relations Cell, she brings strong leadership and project management expertise to Catalyst's strategic initiatives."
              linkedin="https://www.linkedin.com/in/anushika06/"
            />
          </div>
          <div className="animate-on-scroll delay-600">
            <TeamCard 
              image="/assets/1740689782128.jpg"
              name="Adeeba Alam Ansari"
              role="Co-Founder"
              description="Adeeba is a third-year Industrial and Systems Engineering student with expertise in Machine Learning and Finance. Her interdisciplinary background in computer vision and language models, combined with strong leadership and problem-solving skills, drives innovation in Catalyst's technological solutions."
              linkedin="https://www.linkedin.com/in/adeeba-alam-ansari-b3aba1252/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
