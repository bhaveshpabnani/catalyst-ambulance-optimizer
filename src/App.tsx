
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerification";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Add scroll animation observer
  useEffect(() => {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .invisible {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Animation for feature cards */
      .feature-card {
        transition: all 0.4s ease;
      }
      
      /* Animation for slow ping effect */
      @keyframes ping-slow {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0.5; }
        100% { transform: scale(2); opacity: 0; }
      }
      .animate-ping-slow {
        animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      
      /* Floating animation */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      /* CTA Button */
      .cta-button {
        background: linear-gradient(to right, #10b981, #059669);
        color: white;
        font-weight: 500;
        padding: 0.625rem 1.25rem;
        border-radius: 0.5rem;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      }
      
      /* Secondary Button */
      .secondary-button {
        background-color: white;
        color: #10b981;
        font-weight: 500;
        padding: 0.625rem 1.25rem;
        border-radius: 0.5rem;
        border: 1px solid #10b981;
        transition: all 0.3s ease;
      }
      .secondary-button:hover {
        background-color: rgba(16, 185, 129, 0.1);
      }
      
      /* Glass Card */
      .glass-card {
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(8px);
      }
      
      /* Hover underline animation */
      .hover-underline {
        position: relative;
      }
      .hover-underline:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #10b981;
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
      }
      .hover-underline:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      
      /* Input Field */
      .input-field {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        transition: border-color 0.2s ease;
      }
      .input-field:focus {
        outline: none;
        border-color: #10b981;
        box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".invisible");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      document.head.removeChild(style);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
