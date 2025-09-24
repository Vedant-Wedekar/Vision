import React, { useState, useContext } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Log from "../assets/logo.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });
      saveAuth(res.data.token, res.data.user);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center loginBg pr-125">
      <div className="a flex mb-150  ">
                <img className="h-10 w-auto" src={Log} alt="Logo" />
                <div className="a text-white font-extrabold text-3xl" >Vision</div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/1b1a0c12-6bbf-4f8a-9f4c-7c8c6a4b6e36/e7a9f4a9-37d1-45f0-b4b6-d49a9f2d5a42/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>

      {/* Glassmorphism Login Box */}
      <form
        onSubmit={submit}
        className="relative z-10 w-full max-w-md p-10 rounded-2xl backdrop-blur-md ml-100 bg-black/50 border border-white/10 shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">
          Sign In
        </h2>

        <input
          className="w-full p-3 mb-5 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white shadow-lg transition-transform transform hover:scale-[1.02]">
          Sign In
        </button>

        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-red-600" />{" "}
            Remember me
          </label>
          <Link to="/help" className="hover:underline hover:text-white">
            Need help?
          </Link>
        </div>

        <div className="mt-6 text-gray-400 text-center text-sm">
          New to Vision?{" "}
          <Link to="/register" className="text-white font-medium hover:underline">
            Sign up now
          </Link>
        </div>
      </form>
    </div>
  );
}
