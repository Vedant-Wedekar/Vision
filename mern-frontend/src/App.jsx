import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import Player from "./pages/Player";
import TopTrending from "./pages/TopTranding";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SubscribePage from "./pages/SubscribePage";
import Music from "./pages/Music";
import { AuthContext } from "./context/AuthContext";
import api from "./api/axios";

function Protected({ children }) {
  const { token, loading } = useContext(AuthContext);
  if (loading) return <div className="p-6 text-white">Loading...</div>;
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const { token } = useContext(AuthContext);
  const [watchLater, setWatchLater] = useState([]);

  // Load watch later from backend
  useEffect(() => {
    const fetchWatchLater = async () => {
      if (!token) return;
      try {
        const res = await api.get("/api/users/watchlater", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWatchLater(res.data.watchLater || []);
      } catch (err) {
        console.error("Failed to load watch later:", err.response?.data || err);
      }
    };
    fetchWatchLater();
  }, [token]);

  // Add to watch later (backend)
  const addToWatchLater = async (movie) => {
    if (!token) return alert("Please login to save movies.");
    try {
      const res = await api.post(
        "/api/users/watchlater",
        {
          movieId: movie.id,
          title: movie.title,
          poster: movie.post || movie.img,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setWatchLater(res.data);
      alert("Movie added to Watch Later ✅");
    } catch (err) {
      console.error("Failed to add movie:", err.response?.data || err);
      alert(err.response?.data?.msg || "Failed to add movie. Try again.");
    }
  };

  const removeFromWatchLater = async (movieId) => {
    if (!token) return;
    try {
      const res = await api.delete(`/api/users/watchlater/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWatchLater(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <Protected>
            <Home addToWatchLater={addToWatchLater} />
          </Protected>
        }
      />
      <Route
        path="/top"
        element={
          <Protected>
            <TopTrending addToWatchLater={addToWatchLater} />
          </Protected>
        }
      />
      <Route
        path="/watchlater"
        element={
          <Protected>
            <WatchLater
              watchLater={watchLater}
              removeFromWatchLater={removeFromWatchLater}
            />
          </Protected>
        }
      />
      <Route
        path="/category"
        element={
          <Protected>
            <Category addToWatchLater={addToWatchLater} />
          </Protected>
        }
      />
      <Route
        path="/player/:id"
        element={
          <Protected>
            <Player />
          </Protected>
        }
      />
      <Route
        path="/profile"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />
      <Route path="/subscribe" element={<SubscribePage />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  );
}
