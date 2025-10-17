import React, { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Trash2, Play } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function WatchLater() {
  const { token } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removing, setRemoving] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const res = await api.get("/api/users/watchlater", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMovies(res.data.watchLater || []);
      } catch (err) {
        console.error("Error fetching watch later:", err.response?.data || err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchWatchLater();
  }, [token]);

  const handleRemove = async (movieId) => {
    if (!token) return;
    setRemoving(movieId);
    try {
      await api.delete(`/api/users/watchlater/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMovies((prev) => prev.filter((m) => m.movieId !== movieId));
    } catch (err) {
      console.error("Error removing movie:", err.response?.data || err);
      alert("Failed to remove movie. Try again.");
    } finally {
      setRemoving(null);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#0B0C10] text-white">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-5"></div>
        <p className="text-gray-400 text-lg tracking-wide">
          Fetching your movies...
        </p>
      </div>
    );

  if (movies.length === 0)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#0B0C10] text-gray-400">
        <Header />
        <h2 className="text-4xl font-bold text-white mb-3 mt-10">
          🎬 Watch Later
        </h2>
        <p className="text-lg text-gray-500">
          No saved titles yet. Start adding your favorites!
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0C10] via-[#141622] to-[#0B0C10] text-white flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 px-6 md:px-12 py-10 mt-20 ml-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide flex items-center gap-2">
            🎬 Watch Later
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <AnimatePresence>
              {movies.map((m, i) => (
                <motion.div
                  key={m._id || m.movieId || i}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="relative group overflow-hidden rounded-2xl cursor-pointer bg-[#1A1C25]/50 backdrop-blur-lg border border-white/5 hover:border-purple-500/40 shadow-[0_5px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500 ease-out transform hover:-translate-y-2"
                >
                  <img
                    src={m.poster || m.img || "https://via.placeholder.com/300x400"}
                    alt={m.title}
                    className="w-full h-72 object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onClick={() => navigate(`/player/${m.movieId}`)}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent"></div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-semibold truncate drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                      {m.title}
                    </h3>
                  </div>

                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded-md text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">
                    ★ {m.rating || "N/A"}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <button
                      onClick={() => navigate(`/player/${m.movieId}`)}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-md shadow-purple-800/40 transition"
                    >
                      <Play size={16} /> Watch
                    </button>
                    <button
                      onClick={() => handleRemove(m.movieId)}
                      disabled={removing === m.movieId}
                      className="bg-red-600/90 hover:bg-red-700 text-white p-2 rounded-full shadow-md shadow-red-900/40 transition"
                    >
                      {removing === m.movieId ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Trash2 size={18} />
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
