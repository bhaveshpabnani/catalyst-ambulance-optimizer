import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Ambulance, MapPin } from "lucide-react";

interface UserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  licenseNumber?: string;
  experience?: string;
  ambulanceType?: string;
  registrationNumber?: string;
  parkingLocation?: string;
  latitude?: number;
  longitude?: number;
  displayName?: string;
  photoURL?: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isDriver, setIsDriver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const driverData = localStorage.getItem('driverProfile');
    const userData = localStorage.getItem('user');

    if (driverData) {
      setProfile(JSON.parse(driverData));
      setIsDriver(true);
    } else if (userData) {
      setProfile(JSON.parse(userData));
      setIsDriver(false);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-catalyst-500 p-6 text-white">
            <h1 className="text-2xl font-bold">Profile</h1>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-catalyst-100 flex items-center justify-center">
                {profile.photoURL ? (
                  <img src={profile.photoURL} alt="Profile" className="w-20 h-20 rounded-full" />
                ) : (
                  <User size={40} className="text-catalyst-600" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {isDriver ? `${profile.firstName} ${profile.lastName}` : profile.displayName}
                </h2>
                <p className="text-gray-600">{isDriver ? "Registered Driver" : "User"}</p>
              </div>
            </div>

            {isDriver ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="space-y-3">
                      <p><span className="font-medium">Email:</span> {profile.email}</p>
                      <p><span className="font-medium">Phone:</span> {profile.phone}</p>
                      <p><span className="font-medium">License Number:</span> {profile.licenseNumber}</p>
                      <p><span className="font-medium">Experience:</span> {profile.experience}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ambulance Details</h3>
                    <div className="space-y-3">
                      <p><span className="font-medium">Type:</span> {profile.ambulanceType}</p>
                      <p><span className="font-medium">Registration:</span> {profile.registrationNumber}</p>
                      <p><span className="font-medium">Parking Location:</span> {profile.parkingLocation}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/edit-profile')}
                    className="mr-4"
                  >
                    Edit Profile
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">Want to register as a driver?</p>
                <Button
                  onClick={() => navigate('/register')}
                  className="bg-catalyst-500 hover:bg-catalyst-600"
                >
                  Register as Driver
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;