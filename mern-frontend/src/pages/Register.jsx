import React, { useState, useContext } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Log from "../assets/logoo.png";
import { motion } from "framer-motion";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });
      saveAuth(res.data.token, res.data.user);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Register failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center loginBg pr-80">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/1b1a0c12-6bbf-4f8a-9f4c-7c8c6a4b6e36/e7a9f4a9-37d1-45f0-b4b6-d49a9f2d5a42/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center"></div>
         <div className="a flex mb-190  ml-5">
                      <img className="h-30 w-auto" src={Log} alt="Logo" />
                      {/* <div className="a text-white font-extrabold text-3xl" >Vision</div> */}
                {/* <div className="a text-white ml-2 font-extrabold flex text-3xl" > Sphere</div> */}

            </div>
      <div className="absolute inset-0 "></div>

      {/* Register Form */}
     <motion.form
  onSubmit={submit}
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative z-10 w-full max-w-md p-10 rounded-2xl backdrop-blur-md ml-150 bg-white/600 border border-white/10 shadow-2xl"
>
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">
          Create Account
        </h2>

        <input
          className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#7962b3] transition"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-3 mb-4 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#7962b3] transition"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 mb-6 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#7962b3] transition"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 bg-[#2F244C] hover:bg-[#7962b3] rounded-lg font-semibold text-white shadow-lg transition-transform transform hover:scale-[1.02]">
          Register
        </button>

        <div className="mt-6 text-gray-400 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-medium hover:underline">
            Log In
          </Link>
        </div>
   </motion.form>


    </div>
  );
}
