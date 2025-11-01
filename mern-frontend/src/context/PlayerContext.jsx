import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData?.[0] || {});
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  // Play / Pause
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  // Play specific song by ID safely
  const playWithId = (id) => {
    const song = songsData.find((s) => s.id === id);
    if (!song) return console.warn("Song not found:", id);

    setTrack(song);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
        setPlayStatus(true);
      }
    }, 150);
  };

  // Next / Previous
  const previous = () => {
    const currentIndex = songsData.findIndex((s) => s.id === track.id);
    if (currentIndex > 0) playWithId(songsData[currentIndex - 1].id);
  };

  const next = () => {
    const currentIndex = songsData.findIndex((s) => s.id === track.id);
    if (currentIndex < songsData.length - 1) {
      playWithId(songsData[currentIndex + 1].id);
    }
  };

  // Seek
  const seekSong = (e) => {
    if (!audioRef.current || !seekBg.current) return;
    const offsetX = e.nativeEvent.offsetX;
    const width = seekBg.current.offsetWidth;
    const duration = audioRef.current.duration || 0;
    audioRef.current.currentTime = (offsetX / width) * duration;
  };

  // Time update for progress + duration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!audio.duration || !seekBar.current) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      seekBar.current.style.width = `${percent}%`;

      const current = audio.currentTime;
      const total = audio.duration;

      setTime({
        currentTime: {
          second: Math.floor(current % 60)
            .toString()
            .padStart(2, "0"),
          minute: Math.floor(current / 60),
        },
        totalTime: {
          second: Math.floor(total % 60)
            .toString()
            .padStart(2, "0"),
          minute: Math.floor(total / 60),
        },
      });
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [track]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
      {/* ✅ Keep audio tag so it exists globally */}
      <audio
        ref={audioRef}
        src={track?.file || track?.audio || ""}
        preload="metadata"
      />
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
