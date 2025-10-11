import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
  const { user, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/login"); // redirect to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1014] text-white">
            <Sidebar />
      
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-[350px] text-center">
                <Header />
        
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        {user ? (
          <>

            <p className="text-lg mb-3">
              <span className="font-semibold">Name:</span>{" "}
              {user.username || "N/A"}
            </p>
            <p className="text-lg mb-6">
              <span className="font-semibold">Email:</span>{" "}
              {user.email || "N/A"}
            </p>
              <p className="text-lg mb-6">
              <span className="font-semibold">Email:</span>{" "}
              {user.email || "N/A"}
            </p>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <Footer />
    </div>  
  );
}
