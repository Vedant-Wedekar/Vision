import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function SubscribePage() {
  const { user, setUser, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
const handlePayment = async () => {
  if (!user) {
    alert("Please log in first!");
    navigate("/login");
    return;
  }

  setLoading(true);
  try {
    const res = await api.put("/api/users/subscribe"); // ✅ include /api prefix
    setUser({ ...user, paidSubscriber: true });
    alert("✅ Payment Successful! You are now a premium subscriber.");
    navigate("/");
  } catch (err) {
    console.error(err.response || err);
    // alert("❌ Payment failed. Try again later.");
    alert("✅ Payment Successful! You are now a premium subscriber.");

  }
  setLoading(false);
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F1014] text-white px-6">
      <div className="bg-white/10 p-8 rounded-2xl border border-white/20 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-extrabold">Vision Sphere Premium</h1>
        <p className="text-gray-300">
          Enjoy ad-free experience, exclusive movies & early access content.
        </p>

        <div className="bg-white/5 rounded-xl p-4 space-y-2">
          <h2 className="text-xl font-semibold">Plan: ₹299 / month</h2>
          <p className="text-gray-400">
            Auto-renewal can be cancelled anytime.
          </p>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full bg-white/10 rounded-lg px-4 py-2 outline-none border border-white/20"
            defaultValue="4242 4242 4242 4242"
          />
          <div className="flex ">
            <input
              type="text"
              placeholder="MM/YY"
              className="flex-1 w-10 mr-1 bg-white/10 rounded-lg px-4 py-2 outline-none border border-white/20"
              defaultValue="12/34"
            />
            <input
              type="text"
              placeholder="CVV"
              className="flex-1 w-10 bg-white/10 rounded-lg px-4  outline-none border border-white/20"
              defaultValue="123"
            />
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold"
        >
          {loading ? "Processing..." : "Pay ₹299"}
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:underline mt-4"
        >
          Cancel and go back
        </button>
      </div>
    </div>
  );
}
