import React, { useState } from "react";
import { movies } from "../movieData";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSelectMovie = (id) => {
    setQuery("");
    setResults([]);
    navigate(`/player/${id}`);
  };

  return (
    <div className="ml-8 flex-1 max-w-md relative">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white z-10"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.34-4.34" />
        </svg>

        <input
          value={query}
          onChange={handleChange}
          placeholder="Search movies, shows..."
          className="w-full pl-10 pr-4 py-2 
          rounded-xl bg-white/10 hover:bg-white/15 
          placeholder-white text-white text-sm 
          border border-white/20 backdrop-blur-md
          focus:ring-2 focus:ring-white/30 focus:border-white/30 
          outline-none transition duration-300 ease-in-out
          shadow-sm focus:shadow-md"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute top-12 w-full bg-black/80 border border-white/20 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-3 p-2 hover:bg-white/10 cursor-pointer"
              onClick={() => handleSelectMovie(movie.id)}
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-10 h-14 rounded-md object-cover"
              />
              <span className="text-white">{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
