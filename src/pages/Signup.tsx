import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { toast } from "@/components/ui/use-toast";
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Signup: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'submit-button', {
        size: 'invisible',
        callback: () => {}
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber.trim())) {
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
      localStorage.setItem('userPhoneNumber', phoneNumber);
      navigate("/otp-verification", { state: { phoneNumber, isSignup: true } });
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

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }));
      
      toast({
        title: "Success",
        description: "Successfully signed up with Google",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign up with Google",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-catalyst-500 to-catalyst-700 p-8 text-white flex-col justify-between">
        <div>
          <Logo className="text-white mb-12" />
          <div className="mt-16">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Join Catalyst Today
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Create an account to access our ambulance optimization services.
            </p>
          </div>
        </div>
        <div className="text-white/70 text-sm">
          © 2023 Catalyst. All rights reserved.
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Logo />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600 mb-8">Sign up to get started with Catalyst</p>

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
            </div>

            <button
              id="submit-button"
              type="submit"
              className="cta-button w-full"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Sign up with Phone"}
            </button>

            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="mt-4 w-full flex items-center justify-center gap-3 bg-white px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  {/* Google icon paths */}
                </svg>
                Sign up with Google
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-catalyst-600 hover:text-catalyst-700 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;