
import React from "react";
import TeamCard from "./TeamCard";

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-catalyst-600 font-semibold uppercase tracking-wider text-sm">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet the Innovators</h2>
          <div className="w-20 h-1 bg-catalyst-500 mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Our team of experts is passionate about leveraging technology to revolutionize emergency healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamCard 
            image="/lovable-uploads/96993ce4-e1ab-4346-bb4b-533ad6c4ca68.png"
            name="Devansh Jain"
            role="Co-Founder & CEO"
            description="Devansh is a third-year student pursuing Mathematics & Computing with expertise in entrepreneurship and data analysis. He has significant experience in strategy development and business operations."
            linkedin="https://linkedin.com/"
          />
          
          <TeamCard 
            image="/lovable-uploads/2728e55e-0f58-46f6-9cd2-dce2267d35f2.png"
            name="SSVKSS Jyothiraditya"
            role="Co-Founder & CTO"
            description="Jyothiraditya is a dynamic professional with expertise in AI, blockchain, and natural language processing. His technical prowess and problem-solving skills drive Catalyst's innovative technology."
            linkedin="https://linkedin.com/"
          />
          
          <TeamCard 
            image="/lovable-uploads/b19b8d18-f499-42bd-9a52-5e47a1924c09.png"
            name="Sarah Johnson"
            role="Head of Operations"
            description="Sarah brings over 8 years of healthcare operations experience to Catalyst. Her deep understanding of emergency services has been instrumental in developing our optimized response systems."
            linkedin="https://linkedin.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
