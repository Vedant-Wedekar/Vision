// import React from "react";
// import { useParams } from "react-router-dom";
// import { movies } from "../movieData";

// export default function Player() {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === parseInt(id));

//   if (!movie) return <p className="text-black">Movie not found</p>;

//   return (
//     <div className="p-10 text-black">
//       {/* Video player */}
//       <video src={movie.video} controls autoPlay className="w-full rounded-lg" />

//       {/* Movie details */}
//       <h1 className="text-4xl font-bold mt-6">{movie.title}</h1>
//       <p className="mt-3">{movie.description}</p>
//       <h3 className="mt-4 font-semibold">Cast:</h3>
//       <ul className="list-disc ml-6">
//         {movie.cast.map((actor, i) => (
//           <li key={i}>{actor}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// import React, { useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { movies } from "../movieData";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize,
//   RotateCcw,
//   RotateCw,
// } from "lucide-react"; // premium icons

// export default function Player() {
//   const { id } = useParams();
//   const movie = movies.find((m) => m.id === parseInt(id));

//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(false);

//   if (!movie) return <p className="text-white">Movie not found</p>;

//   // Play / Pause handler
//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   // Mute handler
//   const toggleMute = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = !isMuted;
//     setIsMuted(!isMuted);
//   };

//   // Fullscreen handler
//   const goFullscreen = () => {
//     if (videoRef.current.requestFullscreen) {
//       videoRef.current.requestFullscreen();
//     }
//   };

//   // Skip handlers
//   const skipForward = () => {
//     if (videoRef.current) videoRef.current.currentTime += 10;
//   };
//   const skipBackward = () => {
//     if (videoRef.current) videoRef.current.currentTime -= 10;
//   };

//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       {/* Video Player Container */}
//       <div className="relative w-full max-h-[70vh] bg-black overflow-hidden">
//         <video
//           ref={videoRef}
//           src={movie.video}
//           autoPlay
//           className="w-full h-full object-cover"
//         />

//         {/* Overlay gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

//         {/* Custom Controls */}
//         <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8 text-white">
//           {/* Left Controls */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={togglePlay}
//               className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//             >
//               {isPlaying ? <Pause size={22} /> : <Play size={22} />}
//             </button>

//             <button
//               onClick={skipBackward}
//               className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//             >
//               <RotateCcw size={22} />
//             </button>

//             <button
//               onClick={skipForward}
//               className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//             >
//               <RotateCw size={22} />
//             </button>

//             <button
//               onClick={toggleMute}
//               className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//             >
//               {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
//             </button>
//           </div>

//           {/* Right Controls */}
//           <button
//             onClick={goFullscreen}
//             className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
//           >
//             <Maximize size={22} />
//           </button>
//         </div>
//       </div>

//       {/* Movie Info Section */}
//       <div className="p-8 text-white max-w-6xl mx-auto">
//         <h1 className="text-5xl font-extrabold">{movie.title}</h1>
//         <p className="mt-4 text-gray-300 text-lg leading-relaxed">
//           {movie.description}
//         </p>

//         {/* Cast Section */}
//         <h3 className="mt-8 font-semibold text-2xl">Cast</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-4">
//           {movie.cast.map((actor, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
//             >
//               {/* actor.image should be in your movieData */}
//               <img
//                 src={actor.image}
//                 alt={actor.name}
//                 className="w-24 h-24 object-cover rounded-full shadow-lg"
//               />
//               <p className="mt-3 text-white font-medium">{actor.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../movieData";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  RotateCw,
  ArrowLeft,
} from "lucide-react";

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!movie) return <p className="text-white">Movie not found</p>;

  // Handlers
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const goFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const skipForward = () => {
    if (videoRef.current) videoRef.current.currentTime += 10;
  };
  const skipBackward = () => {
    if (videoRef.current) videoRef.current.currentTime -= 10;
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Video Player Container */}
      <div className="relative w-full max-h-[70vh] bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={movie.video}
          autoPlay
          className="w-full h-full object-cover"
        />

        {/* Back Button (top-left) */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ArrowLeft size={22} />
        </button>

        {/* Custom Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8 text-white">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>

            <button
              onClick={skipBackward}
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              <RotateCcw size={22} />
            </button>

            <button
              onClick={skipForward}
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              <RotateCw size={22} />
            </button>

            <button
              onClick={toggleMute}
              className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>
          </div>

          {/* Right Controls */}
          <button
            onClick={goFullscreen}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <Maximize size={22} />
          </button>
        </div>
      </div>

      {/* Movie Info Section */}
      <div className="p-8 text-white max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold">{movie.title}</h1>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          {movie.description}
        </p>

        {/* Cast Section */}
        <h3 className="mt-8 font-semibold text-2xl">Cast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-4">
          {movie.cast.map((actor, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
            >
              {/* actor.image should be in your movieData */}
              <img
                src={actor.image}
                alt={actor.name}
                className="w-24 h-24 object-cover rounded-full shadow-lg"
              />
              <p className="mt-3 text-white font-medium">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
