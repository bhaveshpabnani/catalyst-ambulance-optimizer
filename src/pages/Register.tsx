
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Locate, MapIcon } from "lucide-react";

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    experience: "",
    ambulanceType: "",
    registrationNumber: "",
    address: "",
    parkingLocation: "Choose on map",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    // Redirect to success page or show success message
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-catalyst-500 p-6 text-white">
              <h1 className="text-2xl font-bold">Driver & Ambulance Registration</h1>
              <p className="mt-2">Join our network of ambulance drivers and help save lives</p>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step === currentStep
                            ? "bg-catalyst-500 text-white"
                            : step < currentStep
                            ? "bg-catalyst-200 text-catalyst-700"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step}
                      </div>
                      <span className="text-sm mt-2">
                        {step === 1 ? "Personal Info" : step === 2 ? "Ambulance Details" : "Location"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded">
                    <div
                      className="h-full bg-catalyst-500 rounded transition-all"
                      style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">Driver's License Number</Label>
                      <Input
                        id="licenseNumber"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your license number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("experience", value)}
                        value={formData.experience}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">Less than 1 year</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5+">More than 5 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Ambulance Details</h2>
                    <div className="space-y-2">
                      <Label htmlFor="ambulanceType">Ambulance Type</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("ambulanceType", value)}
                        value={formData.ambulanceType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select ambulance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Ambulance</SelectItem>
                          <SelectItem value="advanced">Advanced/Cardiac Ambulance</SelectItem>
                          <SelectItem value="air">Air Ambulance</SelectItem>
                          <SelectItem value="events">Ambulance For Events</SelectItem>
                          <SelectItem value="hearse">Hearse Ambulance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationNumber">Vehicle Registration Number</Label>
                      <Input
                        id="registrationNumber"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        placeholder="Enter vehicle registration number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Ambulance Base Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your base address"
                        rows={3}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Location Information</h2>
                    <div className="mb-4">
                      <Label htmlFor="parkingLocation">Ambulance Parking Location</Label>
                      <div className="mt-2 relative">
                        <Input
                          id="parkingLocation"
                          name="parkingLocation"
                          value={formData.parkingLocation}
                          onChange={handleInputChange}
                          placeholder="Search for a location"
                          className="pr-10"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="flex mt-2 space-x-2">
                        <Button type="button" variant="outline" size="sm" className="flex items-center">
                          <Locate className="h-4 w-4 mr-2" />
                          Use Current Location
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden bg-gray-100 h-[300px] flex items-center justify-center">
                      <div className="text-center p-6">
                        <MapIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Map would be displayed here</p>
                        <p className="text-sm text-gray-400">Select your exact ambulance parking location</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {currentStep > 1 ? (
                    <Button type="button" variant="outline" onClick={handlePrevious}>
                      Previous
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {currentStep < 3 ? (
                    <Button type="button" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-catalyst-500 hover:bg-catalyst-600">
                      Submit Registration
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
