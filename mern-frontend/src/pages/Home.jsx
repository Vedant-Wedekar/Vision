import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { movies } from "../movieData";

export default function Home({ addToWatchLater }) {
  const { user } = useContext(AuthContext);

  // Movie filters
  const upcoming = movies.filter((m) => m.caste === "upcoming");
  const popular = movies.filter((m) => m.caste === "popular");
  const shows = movies.filter((m) => m.caste === "shows");
  const topRated = movies.filter((m) => m.caste === "top-rated");
  const premium = movies.filter((m) => m.caste === "premium");

  // Movie Card Component
  const MovieCard = ({ movie, isPremium = false }) => {
    const isLocked =
      isPremium && (!user || (user && !user.paidSubscriber));

    return (
      <div
        key={movie.id}
        className="relative group min-w-[220px] max-w-[220px] min-h-[330px] max-h-[330px] rounded-lg bg-gray-900 transform transition-all duration-500 hover:scale-105"
      >
        <img
          src={movie.post}
          alt={movie.title}
          className="w-full h-[330px] object-cover rounded-lg transition duration-500"
        />

        {/* Hover actions */}
         <div className="absolute mt-50 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md p-3 rounded-2xl">
          <h3 className="text-white text-sm font-semibold mb-2 text-center">
            {movie.title}
          </h3>
          <div className="flex gap-3">
            {isLocked ? (
              <button
                disabled
                className="px-3 py-1 bg-gray-600 text-gray-300 rounded text-sm cursor-not-allowed flex items-center gap-1"
              >
                🔒 Locked
              </button>
            ) : (
              <Link
                to={`/player/${movie.id}`}
                className="px-3 py-1 bg-red-600 rounded text-sm hover:bg-red-700 transition"
              >
                Watch Now
              </Link>
            )}

            <button
              onClick={() => addToWatchLater(movie)}
              className={`px-3 py-1 rounded text-sm transition ${
                isLocked
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              disabled={isLocked}
            >
              + Watch Later
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#0F1014]">
      <Header />
      <Sidebar />
      <HeroSection addToWatchLater={addToWatchLater} />

      <main className="ml-50 mt-[95vh] pt-20 px-6 relative z-10">
        <div className="max-w-7xl">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Welcome{user ? `, ${user.name}` : ""}
          </h1>

          {/* 🎬 Upcoming Movies */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🎬 Upcoming Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
              {upcoming.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* 💎 Premium Movies */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-yellow-400">💎 Premium Movies</h2>
            <p className="text-gray-400 mb-2">
              {user && user.paidSubscriber
                ? "Enjoy your exclusive premium content."
                : "These are premium movies — unlock them by subscribing!"}
            </p>

            <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
              {premium.map((movie) => (
                <MovieCard key={movie.id} movie={movie} isPremium={true} />
              ))}
            </div>

            {!user?.paidSubscriber && (
              <div className="mt-4">
                {!user ? (
                  <Link
                    to="/login"
                    className="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold"
                  >
                    Login to Subscribe
                  </Link>
                ) : (
                  <Link
                    to="/subscribe"
                    className="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold"
                  >
                    Upgrade to Premium
                  </Link>
                )}
              </div>
            )}
          </section>

          {/* ⭐ Popular Movies */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">⭐ Popular Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
              {popular.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* 📺 Shows */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">📺 Shows</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
              {shows.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* 🏆 Top Rated IMDb */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🏆 Top Rated IMDb</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
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
