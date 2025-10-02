// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { movies } from "../movieData";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function HeroSection({ addToWatchLater }) {
//   const [hovered, setHovered] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <div className=" w-[94%] ml-20 mt-14 h-[1000px]">
//       <Swiper
//         modules={[ Autoplay]}
//         navigation
//         autoplay={{ delay: 5000 }}
//         loop
//         className="h-[120vh]"
//       >
//        {movies.slice(0, 4).map((movie) => (  
//           <SwiperSlide key={movie.id}>
//             <div
//               className="relative w-full h-[800px] rounded-xl   shadow-lg"
//               onMouseEnter={() => setHovered(movie.id)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               {/* Video / Image */}
//               {hovered === movie.id ? (
//                 <video
//                   src={movie.video}
//                   autoPlay
//                   muted
//                   loop
//                   className="w-full h-[800px] object-cover"
//                 />
//               ) : (
//                 <img
//                   src={movie.img}
//                   alt={movie.title}
//                   className="w-full h-[800px] object-cover"
//                 />
//               )}

//               {/* Overlay */}
//               <div className="absolute top-0 left-0 h-[100%] bg-gradient-to-r from-black/70 to-transparent text-white  max-w-xl pl-15 pt-120 rounded-xl">
//                 <h1 className="text-5xl font-bold">{movie.title}</h1>
//                 <div className="flex gap-3 mt-2 text-sm text-gray-200">
//                   <span>{movie.year}</span>•
//                   <span>{movie.rating}</span>•
//                   <span>{movie.length}</span>•
//                   <span>{movie.languages}</span>
//                 </div>
//                 <p className="mt-3 text-gray-300">{movie.description}</p>
//                 <div className="flex gap-2 mt-2 text-sm flex-wrap">
//                   {movie.keywords.map((kw, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-gray-700 rounded-lg"
//                     >
//                       {kw}
//                     </span>
//                   ))}
//                 </div>
//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-6">
//                   <button
//                     onClick={() => navigate(`/player/${movie.id}`)}
//                     className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
//                   >
//                     ▶ Watch
//                   </button>
//                   <button
//                     onClick={() => addToWatchLater(movie)}
//                     className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold"
//                   >
//                     + Watch Later
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { movies } from "../movieData";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules"; // make sure Autoplay is imported

// export default function HeroSection({ addToWatchLater }) {
//   const [hovered, setHovered] = useState(null);
//   const navigate = useNavigate();
//   const swiperRef = useRef(null);

//   const handleEnter = (movieId) => {
//     setHovered(movieId);
//     if (swiperRef.current && swiperRef.current.autoplay) {
//       try {
//         swiperRef.current.autoplay.stop();
//       } catch (e) {
//         console.warn("swiper autoplay stop failed", e);
//       }
//     }
//   };

//   const handleLeave = () => {
//     setHovered(null);
//     if (swiperRef.current && swiperRef.current.autoplay) {
//       try {
//         swiperRef.current.autoplay.start();
//       } catch (e) {
//         console.warn("swiper autoplay start failed", e);
//       }
//     }
//   };

//   return (
//     <div className="w-[94%] ml-20 mt-14 h-[1000px]">
//       <Swiper
//         modules={[Autoplay, Navigation]}                     // <-- include Autoplay here
//         navigation
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="h-[120vh]"
//         onSwiper={(swiper) => (swiperRef.current = swiper)}  // store instance in ref
//       >
//         {movies.slice(0, 4).map((movie) => (                // only first 4 items
//           <SwiperSlide key={movie.id}>
//             <div
//               className="relative w-full h-[800px] rounded-xl shadow-lg"
//               onMouseEnter={() => handleEnter(movie.id)}    // pause when hovering
//               onMouseLeave={handleLeave}                    // resume on leave
//             >
//               {hovered === movie.id ? (
//                 <video src={movie.video} autoPlay muted loop className="w-full h-[800px] object-cover" />
//               ) : (
//                 <img src={movie.img} alt={movie.title} className="w-full h-[800px] object-cover" />
//               )}

//               {/* overlay & buttons (same as before) */}
//               <div className="absolute top-0 left-0 h-[100%] bg-gradient-to-r from-black/70 to-transparent text-white max-w-xl pl-15 pt-120 rounded-xl">
//                 <h1 className="text-5xl font-bold">{movie.title}</h1>
//                 <div className="flex gap-3 mt-2 text-sm text-gray-200">
//                   <span>{movie.year}</span>•
//                   <span>{movie.rating}</span>•
//                   <span>{movie.length}</span>•
//                   <span>{movie.languages}</span>
//                 </div>
//                 <p className="mt-3 text-gray-300">{movie.description}</p>
//                 <div className="flex gap-2 mt-2 text-sm flex-wrap">
//                   {movie.keywords.map((kw, i) => (
//                     <span key={i} className="px-2 py-1 bg-gray-700 rounded-lg">{kw}</span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4 mt-6">
//                   <button onClick={() => navigate(`/player/${movie.id}`)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">▶ Watch</button>
//                   <button onClick={() => addToWatchLater(movie)} className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold">+ Watch Later</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { movies } from "../movieData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function HeroSection({ addToWatchLater }) {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleEnter = (movieId) => {
    setHovered(movieId);
    if (swiperRef.current && swiperRef.current.autoplay) {
      try {
        swiperRef.current.autoplay.stop();
      } catch (e) {
        console.warn("swiper autoplay stop failed", e);
      }
    }
  };

  const handleLeave = () => {
    setHovered(null);
    if (swiperRef.current && swiperRef.current.autoplay) {
      try {
        swiperRef.current.autoplay.start();
      } catch (e) {
        console.warn("swiper autoplay start failed", e);
      }
    }
  };

  return (
    // FIXED hero background
    <div className="fixed top-0 left-0 w-full h-[90vh] ml-20 mt-15 -z-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {movies.slice(0, 4).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-full h-full"
              onMouseEnter={() => handleEnter(movie.id)}
              onMouseLeave={handleLeave}
            >
              {hovered === movie.id ? (
                <video
                  src={movie.video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay & Info */}
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-black/70 to-transparent text-white max-w-xl p-12 flex flex-col justify-center">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <div className="flex gap-3 mt-2 text-sm text-gray-200">
                  <span>{movie.year}</span>•
                  <span>{movie.rating}</span>•
                  <span>{movie.length}</span>•
                  <span>{movie.languages}</span>
                </div>
                <p className="mt-3 text-gray-300">{movie.description}</p>
                <div className="flex gap-2 mt-2 text-sm flex-wrap">
                  {movie.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700 rounded-lg"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => navigate(`/player/${movie.id}`)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                  >
                    ▶ Watch
                  </button>
                  <button
                    onClick={() => addToWatchLater(movie)}
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold"
                  >
                    + Watch Later
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Optional dark overlay for fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0F1014] to-transparent"></div>
    </div>
  );
}
