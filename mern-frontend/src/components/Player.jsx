import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  // ✅ Safety fallbacks (avoid undefined access)
  const currentTrack = track || {
    image: assets.default_track || "",
    name: "Unknown Track",
    desc: "No description available",
  };

  const currentTime = time?.currentTime || { minute: "00", second: "00" };
  const totalTime = time?.totalTime || { minute: "00", second: "00" };

  return (
    <div
      className="h-[10%] ml-20 bg-[#0F1014] flex justify-between items-center
      text-white px-4 border-t border-gray-800"
    >
      {/* 🎵 Track Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12 h-12 object-cover rounded"
          src={currentTrack.image}
          alt={currentTrack.name}
          onError={(e) => (e.target.src = assets.default_track || "")}
        />
        <div>
          <p className="font-semibold text-sm">{currentTrack.name}</p>
          <p className="text-xs text-gray-400">
            {currentTrack.desc ? currentTrack.desc.slice(0, 43) : "No info"}
          </p>
        </div>
      </div>

      {/* ▶️ Player Controls */}
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex gap-4 items-center">
          <img
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.shuffle_icon}
            alt="Shuffle"
            title="Shuffle"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.prev_icon}
            alt="Previous"
            title="Previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-6 cursor-pointer opacity-90 hover:opacity-100"
              src={assets.pause_icon}
              alt="Pause"
              title="Pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-6 cursor-pointer opacity-90 hover:opacity-100"
              src={assets.play_icon}
              alt="Play"
              title="Play"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.next_icon}
            alt="Next"
            title="Next"
          />
          <img
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.loop_icon}
            alt="Loop"
            title="Loop"
          />
        </div>

        {/* ⏱️ Seek Bar */}
        <div className="flex items-center gap-3 w-full max-w-[600px]">
          <p className="text-xs w-10 text-right">
            {currentTime.minute}:{currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-full bg-gray-600/50 h-1 rounded-full cursor-pointer relative"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none bg-green-600 rounded-full absolute top-0 left-0"
              style={{ width: "0%" }}
            />
          </div>
          <p className="text-xs w-10 text-left">
            {totalTime.minute}:{totalTime.second}
          </p>
        </div>
      </div>

      {/* ⚙️ Right-side Controls */}
      <div className="hidden lg:flex items-center gap-3 opacity-80">
        <img className="w-4" src={assets.plays_icon} alt="Plays" title="Plays" />
        <img className="w-4" src={assets.mic_icon} alt="Mic" title="Mic" />
        <img className="w-4" src={assets.queue_icon} alt="Queue" title="Queue" />
        <img
          className="w-4"
          src={assets.speaker_icon}
          alt="Speaker"
          title="Speaker"
        />
        <img
          className="w-4"
          src={assets.volume_icon}
          alt="Volume"
          title="Volume"
        />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="Mini Player"
          title="Mini Player"
        />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom" title="Zoom" />
      </div>
    </div>
  );
};

export default Player;
