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
          {/* ✅ Subscribe Button (Improved Design) */}
{/* ✅ Subscribe Button (Premium Pop Design) */}
{/* ✅ Subscribe Button (True POP Effect) */}
<button
  onClick={handleSubscribeClick}
  className={`relative overflow-hidden px-7 py-2.5 font-semibold text-sm rounded-full transition-all duration-300 transform
    ${
      user?.paidSubscriber
        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.7)] hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,1)]'
        : 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.8)] hover:scale-110 hover:shadow-[0_0_40px_rgba(236,72,153,1)]'
    }`}
>
  <span className="relative z-10 flex items-center gap-2">
    {user?.paidSubscriber ? 'Subscribed ✅' : 'Subscribe Now ✨'}
  </span>

  {/* Animated shine overlay */}
  <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[200%] transition-all duration-700 ease-out"></span>
</button>



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
