
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Simplified approach - set everything visible right away
    const elements = document.querySelectorAll(".invisible");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Stats />
        <Features />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
