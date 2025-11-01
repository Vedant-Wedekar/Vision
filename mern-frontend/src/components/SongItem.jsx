import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  const handleImageError = (e) => {
    e.target.src = "/default_track.jpg"; // fallback image path
  };

  const handlePlay = () => {
    if (id !== undefined && id !== null) {
      playWithId(id);
    } else {
      console.warn("Invalid song ID — cannot play this track.");
    }
  };

  return (
    <div
      onClick={handlePlay}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition duration-200"
    >
      <img
        className="rounded w-full h-[180px] object-cover shadow-lg"
        src={image || "/default_track.jpg"}
        alt={name || "Track cover"}
        onError={handleImageError}
      />
      <p className="font-bold mt-2 mb-1 truncate">{name || "Unknown Song"}</p>
      <p className="text-slate-200 text-sm truncate">
        {desc || "No description available."}
      </p>
    </div>
  );
};

export default SongItem;
