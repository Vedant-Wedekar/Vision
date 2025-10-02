// // src/pages/TopTrending.jsx
// import React from "react";
// import { movies } from "../movieData"; // ✅ ensure file name is moviesData.js
// import { Link } from "react-router-dom";
// import Header from "../components/Header";   // ✅ adjust path if needed
// import Sidebar from "../components/Sidebar"; // ✅ adjust path if needed

// export default function TopTrending({ addToWatchLater }) {
//   const categories = [
//     { key: "hollywood", label: "Top Trending Hollywood" },
//     { key: "bollywood", label: "Top Trending Bollywood" },
//     { key: "tollywood", label: "Top Trending Tollywood" },
//     { key: "mollywood", label: "Top Trending Mollywood" },
//     { key: "webseries", label: "Top Trending Webseries" },
//   ];

//   return (
//     <div className="bg-black min-h-screen flex">
//       {/* Sidebar (fixed on left) */}
//       <Sidebar />

//       {/* Main content area */}
//       <div className="flex-1 flex flex-col">
//         {/* Header (fixed at top) */}
//         <Header />

//         {/* Page Content */}
//         <div className="text-white px-6 pt-20 pl-40">
//           <h1 className="text-3xl font-bold mb-6">🔥 Top Trending</h1>

//           {categories.map((cat) => (
//             <div key={cat.key} className="mb-12">
//               <h2 className="text-2xl font-semibold mb-4">{cat.label}</h2>

//               <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//                 {movies
//                   .filter((m) => m.category === cat.key)
//                   .map((movie) => (
//                     <div
//                       key={movie.id}
//                       className="min-w-[200px] transition-transform transform hover:scale-105"
//                     >
//                       <div className="relative group bg-gray-900 rounded-lg overflow-hidden">
//                         {/* Poster */}
//                         <img
//                           src={movie.img}
//                           alt={movie.title}
//                           className="w-full h-60 object-cover"
//                         />

//                         {/* Overlay on hover */}
//                         <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
//                           <h3 className="text-lg font-semibold">{movie.title}</h3>
//                           <p className="text-xs text-gray-300">{movie.year}</p>

//                           <div className="flex gap-2 mt-2">
//                             <Link
//                               to={`/player/${movie.id}`}
//                               className="px-3 py-1 bg-red-600 rounded text-sm hover:bg-red-700"
//                             >
//                               ▶ Play
//                             </Link>
//                             <button
//                               onClick={() => addToWatchLater(movie)}
//                               className="px-3 py-1 bg-gray-700 rounded text-sm hover:bg-gray-600"
//                             >
//                               + Watch Later
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// src/pages/TopTrending.jsx
// import React from "react";
// import { movies } from "../movieData";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

// export default function TopTrending({ addToWatchLater }) {
//   const categories = [
//     { key: "hollywood", label: "Top Trending Hollywood" },
//     { key: "bollywood", label: "Top Trending Bollywood" },
//     { key: "tollywood", label: "Top Trending Tollywood" },
//     { key: "mollywood", label: "Top Trending Mollywood" },
//     { key: "webseries", label: "Top Trending Webseries" },
//   ];

//   return (
//     <div className="bg-black min-h-screen flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         <Header />

//         <div className="text-white px-6 pt-20">
//           <h1 className="text-3xl font-bold mb-6">🔥 Top Trending</h1>

//           {categories.map((cat) => (
//             <div key={cat.key} className="mb-12">
//               <h2 className="text-2xl font-semibold mb-4">{cat.label}</h2>

//               {/* Carousel */}
//               <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//                 {movies
//                   .filter((m) => m.category === cat.key)
//                   .map((movie) => (
//                     <div
//                       key={movie.id}
//                       className="relative group min-w-[220px] max-w-[220px] h-[330px] rounded-lg overflow-hidden bg-gray-900 transform transition-all duration-500 hover:scale-110 hover:rounded-2xl"
//                     >
//                       {/* Poster */}
//                       <img
//                         src={movie.img}
//                         alt={movie.title}
//                         className="w-full h-full object-cover group-hover:opacity-0 transition duration-500"
//                       />

//                       {/* Hover Overlay → transforms into trailer card */}
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center bg-black/90 p-3 rounded-2xl">
//                         {/* Trailer Preview */}
//                         <video
//                           src={movie.video}
//                           autoPlay
//                           muted
//                           loop
//                           className="w-full h-40 object-cover rounded-md mb-3"
//                         />
//                         <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>

//                         {/* Buttons */}
//                         <div className="flex gap-3">
//                           <Link
//                             to={`/player/${movie.id}`}
//                             className="px-3 py-1 bg-red-600 rounded text-sm hover:bg-red-700 transition"
//                           >
//                             ▶ Watch Now
//                           </Link>
//                           <button
//                             onClick={() => addToWatchLater(movie)}
//                             className="px-3 py-1 bg-gray-700 rounded text-sm hover:bg-gray-600 transition"
//                           >
//                             + Watch Later
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { movies } from "../movieData";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function TopTrending({ addToWatchLater }) {
  const categories = [
    { key: "hollywood", label: "Top Trending Hollywood" },
    { key: "bollywood", label: "Top Trending Bollywood" },
    { key: "tollywood", label: "Top Trending Tollywood" },
    { key: "mollywood", label: "Top Trending Mollywood" },
    { key: "webseries", label: "Top Trending Webseries" },
  ];

  return (
    <div className="bg-black min-h-screen ml-20 flex a">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="text-white px-6 pt-20">
          <h1 className="text-3xl font-bold mb-6">🔥 Top Trending</h1>

          {categories.map((cat) => (
            <div key={cat.key} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{cat.label}</h2>
              {/* Carousel */}
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {movies
                  .filter((m) => m.category === cat.key)
                  .map((movie) => (
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

                      

                      {/* Hover Overlay → transforms into trailer card */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center bg-black/90 p-3 rounded-2xl">
                        {/* Trailer Preview */}
                        <video
                          src={movie.video}
                          autoPlay
                          muted
                          loop
                          className="w-full h-40 object-cover rounded-md mb-3"
                        />
                        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>

                        {/* Buttons */}
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
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
