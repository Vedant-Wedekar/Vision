
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { movies } from "../movieData"; // Import your movieData.js

export default function Home() {
  const { user } = useContext(AuthContext);
  const [watchLaterLocal, setWatchLaterLocal] = useState(
    user?.watchLater || []
  );

  const addToWatchLater = async (movie) => {
    try {
      const res = await api.post("/api/users/watchlater", movie);
      setWatchLaterLocal(res.data);
      alert("Added to Watch Later");
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to add");
    }
  };

  // Filter categories
  const upcoming = movies.filter((m) => m.caste === "upcoming");
  const popular = movies.filter((m) => m.caste === "popular");
  const shows = movies.filter((m) => m.caste === "shows");
  const topRated = movies.filter((m) => m.caste === "top-rated");

  // Movie Card
  const MovieCard = ({ movie }) => (
    <div
      key={movie.id}
      className="relative group min-w-[220px] max-w-[220px] h-[330px] rounded-lg overflow-hidden bg-gray-900 transform transition-all duration-500 hover:scale-110 hover:rounded-2xl"
    >
      {/* Poster */}
      <img
        src={movie.post}
        alt={movie.title}
        className="w-full h-full object-cover group-hover:opacity-0 transition duration-500"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center bg-black/90 p-3 rounded-2xl">
        <video
          src={movie.video}
          autoPlay
          muted
          loop
          className="w-full h-40 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold mb-2 text-white text-center">
          {movie.title}
        </h3>

        <div className="flex gap-3">
          <Link
            to={`/player/${movie.id}`}
            className="px-3 py-1 bg-red-600 rounded text-sm hover:bg-red-700 transition"
          >
            ▶ Watch Now
          </Link>
          <button
            onClick={() => addToWatchLater(movie)}
            className="px-3 py-1 bg-gray-700 rounded text-sm hover:bg-gray-600 transition"
          >
            + Watch Later
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0F1014]">
      <Header />
      <Sidebar />

      {/* Hero Section stays fixed */}
      <HeroSection addToWatchLater={addToWatchLater} />

      {/* Content starts after Hero */}
     <main className="ml-6 mt-[90vh] px-6 relative z-10">
  <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6  text-white">
            Welcome{user ? `, ${user.name}` : ""}
          </h1>

          {/* Upcoming Movies */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🎬 Upcoming Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {upcoming.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Popular Movies */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">⭐ Popular Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {popular.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Shows */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">📺 Shows</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {shows.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Top Rated IMDb */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🏆 Top Rated IMDb</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {topRated.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
