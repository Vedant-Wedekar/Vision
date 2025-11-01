import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, songsData, assets } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);

  // Convert the route param safely to a number
  const albumId = Number(id);

  // Find the album safely
  const albumData = albumsData.find((album) => album.id === albumId);

  // If album not found, show a fallback UI (prevents white screen)
  if (!albumData) {
    return (
      <div className="bg-[#0F1014] min-h-screen text-white flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-bold mt-10">Album Not Found 😕</h1>
        <p className="text-gray-400 mt-2">
          The album with ID <b>{id}</b> doesn’t exist.
        </p>
      </div>
    );
  }

  // For now, show all songs since your songsData doesn’t link to albums
  const albumSongs = songsData;

  return (
    <div className="bg-[#0F1014] text-white min-h-screen px-6 pb-20">
      <Navbar />

      {/* Album Info */}
      <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8">
        <img
          className="w-48 rounded shadow-lg object-cover"
          src={albumData.image || assets.default_track}
          alt={albumData.name}
          onError={(e) => (e.target.src = assets.default_track)}
        />
        <div className="flex flex-col">
          <p className="uppercase text-gray-400 text-sm">Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4 className="text-gray-300">{albumData.desc}</h4>
          <p className="mt-1 text-gray-400 text-sm flex items-center">
            <img
              className="inline-block w-5 mr-2 align-middle"
              src={assets.spotify_logo}
              alt="Spotify"
            />
            <span>
              <b>Spotify</b> • <b>{albumSongs.length}</b> songs
            </span>
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Duration" />
      </div>
      <hr className="border-gray-700" />

      {/* Song List */}
      {albumSongs && albumSongs.length > 0 ? (
        albumSongs.map((item, index) => (
          <div
            key={item.id}
            onClick={() => playWithId(item.id)}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center 
                       text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded transition duration-200"
          >
            <div className="flex items-center text-white text-sm md:text-[15px]">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img
                className="w-10 h-10 rounded object-cover mr-4"
                src={item.image || assets.default_track}
                alt={item.name}
                onError={(e) => (e.target.src = assets.default_track)}
              />
              <div>
                <div className="truncate w-36 sm:w-48">
                  {item.name || "Unknown Song"}
                </div>
                <div className="text-[#a7a7a7] text-xs truncate w-36 sm:w-48">
                  {item.desc || "No description"}
                </div>
              </div>
            </div>

            <p className="text-[15px] truncate">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">Recently Added</p>
            <p className="text-[15px] text-center">{item.duration || "0:00"}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center mt-10">
          No songs available for this album.
        </p>
      )}
    </div>
  );
};

export default DisplayAlbum;
