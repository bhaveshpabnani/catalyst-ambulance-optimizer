
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { toast } from "@/components/ui/use-toast";
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Add this function to set up reCAPTCHA
  // Update the setupRecaptcha function
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'submit-button', {
        size: 'invisible',
        callback: () => {
          // Callback is optional for invisible reCAPTCHA
        }
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\d{10}$/.test(phoneNumber.trim())) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      setupRecaptcha();
      const formattedPhoneNumber = `+91${phoneNumber}`;
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier);
      window.confirmationResult = confirmationResult;
      navigate("/otp-verification", { state: { phoneNumber } });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send OTP",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // In handleGoogleSignIn function
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }));
      
      toast({
        title: "Success",
        description: "Successfully signed in with Google",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign in with Google",
        variant: "destructive",
      });
    }
  };

  // In handleSubmit function, after OTP verification success
  localStorage.setItem('user', JSON.stringify({
    phoneNumber,
    type: 'phone'
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Panel - On medium screens and up */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-catalyst-500 to-catalyst-700 p-8 text-white flex-col justify-between">
        <div>
          <Logo className="text-white mb-12" />
          
          <div className="mt-16">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Optimizing Ambulance Services with Catalyst
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Fast, efficient emergency response that saves lives.
            </p>
          </div>
          
          <div className="max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-2 rounded-full">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 16V7C19 5.9 18.1 5 17 5H14V4C14 3.4 13.6 3 13 3H7C6.4 3 6 3.4 6 4V5H3C1.9 5 1 5.9 1 7V16C1 17.1 1.9 18 3 18H4L4 21H6L6 18H14L14 21H16L16 18H17C18.1 18 19 17.1 19 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 14H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 9H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-medium">24/7 Emergency Assistance</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-2 rounded-full">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="font-medium">Smart Location Tracking</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-2 rounded-full">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-medium">Reduced Response Time</span>
            </div>
          </div>
        </div>
        
        <div className="text-white/70 text-sm">
          © 2023 Catalyst. All rights reserved.
        </div>
      </div>
      
      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Logo />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Log in to Catalyst</h2>
          <p className="text-gray-600 mb-8">Enter your phone number to continue</p>
          
          <form onSubmit={handleSubmit}>
            <div id="recaptcha-container"></div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="input-field"
                placeholder="Enter your 10-digit number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
              />
              <p className="text-sm text-gray-500 mt-2">
                We'll never share your number with anyone else.
              </p>
            </div>
            
            <button
              id="submit-button" // Add this ID for reCAPTCHA
              type="submit"
              className="cta-button w-full flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isLoading ? "Processing..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="mt-4 w-full flex items-center justify-center gap-3 bg-white px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>  
          </form>
          
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-catalyst-600 hover:text-catalyst-700 font-medium">
                Sign up
              </Link>
            </p>
            <Link to="/" className="text-catalyst-600 hover:text-catalyst-700 font-medium block">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
