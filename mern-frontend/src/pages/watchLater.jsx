import React, { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function WatchLater() {
  const { token } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const res = await api.get("/api/users/watchlater", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("WatchLater Data:", res.data); // 👈 check in browser console
        setMovies(res.data.watchLater || []);
      } catch (err) {
        console.error("Error fetching watch later:", err.response?.data || err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchWatchLater();
  }, [token]);

  if (loading)
    return (
      <div className="text-white p-10">
        <h2 className="text-2xl font-bold mb-4">🎬 Watch Later</h2>
        <p className="text-gray-400">Loading your saved movies...</p>
      </div>
    );

  if (movies.length === 0)
    return (
      <div className="text-white p-10">
        <h2 className="text-2xl font-bold mb-4">🎬 Watch Later</h2>
        <p className="text-gray-400">No movies saved yet.</p>
      </div>
    );

  return (
    <div className="text-white p-10">
      <h2 className="text-2xl font-bold mb-4">🎬 Watch Later</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {movies.map((m) => (
          <div
            key={m._id || m.movieId}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={m.post || m.img || "https://via.placeholder.com/300x400"}
              alt={m.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-lg">{m.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
