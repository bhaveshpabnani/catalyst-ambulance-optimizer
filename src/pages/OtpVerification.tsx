
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { toast } from "@/components/ui/use-toast";

const OtpVerification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneNumber = location.state?.phoneNumber || "";
  
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  useEffect(() => {
    if (!phoneNumber) {
      navigate("/login");
    }
    
    // Focus the first input on component mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    
    // Start the countdown timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    
    return () => clearInterval(interval);
  }, [phoneNumber, navigate]);
  
  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to move to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };
  
  const handleResendOtp = () => {
    if (timer > 0) return;
    
    setIsResending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setTimer(30);
      toast({
        title: "OTP Resent",
        description: "A new verification code has been sent to your phone",
      });
    }, 1000);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const otpString = otp.join("");
    
    if (otpString.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 4-digit verification code",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call - using dummy OTP "1234" for demo
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (otpString === "1234") {
        toast({
          title: "Success",
          description: "You have been successfully logged in",
        });
        navigate("/");
      } else {
        toast({
          title: "Incorrect OTP",
          description: "The verification code you entered is incorrect. Please try again.",
          variant: "destructive",
        });
      }
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Panel - On medium screens and up */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-catalyst-500 to-catalyst-700 p-8 text-white flex-col justify-between">
        <div>
          <Logo className="text-white mb-12" />
          
          <div className="mt-16">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              One Step Away from Emergency Care
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Verify your phone number to access Catalyst's life-saving services.
            </p>
          </div>
        </div>
        
        <div className="text-white/70 text-sm">
          © 2023 Catalyst. All rights reserved.
        </div>
      </div>
      
      {/* Right Panel - OTP Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Logo />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Phone Number</h2>
          <p className="text-gray-600 mb-8">
            A 4-digit verification code has been sent to {phoneNumber}
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-4">
                Enter Verification Code
              </label>
              
              <div className="flex justify-between gap-3 mb-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-full aspect-square text-center text-xl font-bold bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-catalyst-500 focus:border-transparent"
                  />
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={timer > 0 || isResending}
                  className={`text-sm font-medium ${
                    timer > 0 ? "text-gray-400" : "text-catalyst-600 hover:text-catalyst-700"
                  }`}
                >
                  {isResending ? (
                    "Resending..."
                  ) : timer > 0 ? (
                    `Resend code in ${timer}s`
                  ) : (
                    "Resend code"
                  )}
                </button>
                
                <Link to="/login" className="text-sm text-catalyst-600 hover:text-catalyst-700 font-medium">
                  Change phone number
                </Link>
              </div>
            </div>
            
            <button
              type="submit"
              className="cta-button w-full flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isSubmitting ? "Verifying..." : "Verify & Continue"}
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Use "1234" as the OTP for this demo
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
