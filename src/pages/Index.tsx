
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Stats />
        <Features />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
