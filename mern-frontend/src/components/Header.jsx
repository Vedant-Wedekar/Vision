import Log from '../assets/logo.png';
import { Search } from "lucide-react";
import SearchBar from './SearchBar';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSubscribeClick = () => {
    if (!user) {
      alert("Please log in first to subscribe!");
      navigate('/login');
      return;
    }

    if (user.paidSubscriber) {
      alert("You're already a premium subscriber! 🎉");
      return;
    }

    navigate('/subscribe'); // ✅ Go to the fake payment page
  };

  return (
    <div className="bg-[#0F1014]">
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#0F1014] text-white z-20">
        <div className="max-w-7xl mx-auto h-full flex items-center px-6">
          {/* Logo + Brand */}
          <div className="flex items-center -ml-15 space-x-3 tit">
            <span className="text-2xl font-extrabold tracking-wide">Vision </span>
            <span className="text-2xl font-extrabold tracking-wide"> Sphere</span>
          </div>

          <SearchBar />

          <div className="flex items-center space-x-5 ml-100">
            {/* ✅ Subscribe Button */}
            <button
              onClick={handleSubscribeClick}
              className={`px-5 py-2.5 font-medium text-sm rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300
                ${
                  user?.paidSubscriber
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
            >
              {user?.paidSubscriber ? 'Subscribed ✅' : 'Subscribe'}
            </button>

            {/* ✅ Avatar + Name */}
            <div className="flex items-center space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMks8CZ8Igv-OE_AYRST5qzyTZDjk0ci5oh4AdTu9KySTNtN2qxuZ2mp9Np2TKUCEbvwY&usqp=CAU"
                alt="avatar"
                className="rounded-full h-10 w-10 object-cover border-2 border-white/20"
              />
              <h1 className="text-xl font-extrabold text-white tit">
                {user ? `${user.name}` : ''}
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
