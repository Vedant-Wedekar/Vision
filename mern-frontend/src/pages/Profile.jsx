import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, User, Calendar, LogOut, Phone, MapPin } from "lucide-react";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "March 2024";

  return ( <div className="">
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0F1014] text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Gradient Background */}
      <div className="absolute inset-0  blur-3xl opacity-60"></div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 relative z-10">
        <Header />

        <div className="relative bg-[#151820]/80 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[#2a2d35] w-[400px] sm:w-[450px] text-center transition-transform transform hover:scale-[1.02] duration-300">
          {/* Profile Image */}
          <div className="mb-6 relative">
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name || "User"}&background=3b82f6&color=fff&bold=true`}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-[#3B82F6] shadow-lg relative z-10"
            />
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold mb-2 tracking-wide">
            {user?.name || "User Name"}
          </h1>
      

          {/* Details Section */}
          {user ? (
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <User className="text-blue-400" size={20} />
                <span className="text-gray-300">
                  <strong className="text-white">Username:</strong>{" "}
                  {user.name || "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-pink-400" size={20} />
                <span className="text-gray-300">
                  <strong className="text-white">Email:</strong>{" "}
                  {user.email || "N/A"}
                </span>
              </div>

            

           

              <div className="flex items-center gap-3">
                <Calendar className="text-purple-400" size={20} />
                <span className="text-gray-300">
                  <strong className="text-white">Joined:</strong> {joinDate}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-gray-400 animate-pulse">
              Loading profile details...
            </p>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-2 rounded-xl text-white font-semibold shadow-lg hover:shadow-red-700/50 transition-all duration-300"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

       
      </div> 
    </div><Footer />
   </div>
  );
}
