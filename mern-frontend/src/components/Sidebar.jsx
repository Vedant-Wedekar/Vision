  import React, { useContext } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { AuthContext } from "../context/AuthContext";
  import {
    Home,
    TrendingUp,
    Music,
    Grid,
    User,
    Clock,
    LogOut,
  } from "lucide-react";
  import Log from "../assets/logoo.png";
  export default function Sidebar() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const items = [
      { to: "/", icon: Home, label: "Home" },
      { to: "/top", icon: TrendingUp, label: "Trending" },
      { to: "/music", icon: Music, label: "Music" },
      { to: "/category", icon: Grid, label: "Category" },
      { to: "/profile", icon: User, label: "Profile" },
      { to: "/watchlater", icon: Clock, label: "Watch Later" },
    ];

    const handleLogout = () => {
      logout();
      navigate("/login");
    };

    return (
      <nav className="fixed top-0 left-0 h-screen w-20 bg-[#0F1014] backdrop-blur-md   shadow-lg z-50 flex flex-col items-center py-6">
        {/* Netflix Brand */}
      <img className="h-20 w-auto -mt-7  " src={Log} alt="Logo" /> 

        {/* Menu Icons */}
        <ul className="flex-1 flex flex-col space-y-6 mt-25">
          {items.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                className={({ isActive }) =>
                  `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-red-600 text-white shadow-lg scale-110"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <it.icon className="w-6 h-6" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center justify-center w-12 h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </nav>
    );
  }
