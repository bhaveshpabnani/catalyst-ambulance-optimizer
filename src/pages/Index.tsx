
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home" className="animate-on-scroll">
          <Hero />
        </section>
        <section id="about" className="animate-on-scroll">
          <AboutUs />
        </section>
        <section id="stats" className="animate-on-scroll">
          <Stats />
        </section>
        <section id="features" className="animate-on-scroll">
          <Features />
        </section>
        <section id="team" className="animate-on-scroll">
          <Team />
        </section>
        
        <section id="services" className="animate-on-scroll">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
