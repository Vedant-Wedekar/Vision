// src/pages/Category.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { movies } from "../movieData";
import { AuthContext } from "../context/AuthContext";

export default function Category({ addToWatchLater }) {
  const { user } = useContext(AuthContext);

  // Filter categories
  const hindiMovies = movies.filter((m) => m.category === "hindi");
  const englishMovies = movies.filter((m) => m.category === "english");
  const romanceMovies = movies.filter((m) => m.category === "romance");
  const horrorMovies = movies.filter((m) => m.category === "horror");
  const actionMovies = movies.filter((m) => m.category === "action");

  // Reusable Movie Card
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

      <main className="ml-6 px-6 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Categories 🎬
          </h1>

          {/* Hindi */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🇮🇳 Hindi Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {hindiMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* English */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🌍 English Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {englishMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Romance */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">💖 Romance Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {romanceMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Horror */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">👻 Horror Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {horrorMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Action */}
          <section className="mb-10">
            <h2 className="text-xl mb-3 text-white">🔥 Action Movies</h2>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide">
              {actionMovies.map((movie) => (
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
