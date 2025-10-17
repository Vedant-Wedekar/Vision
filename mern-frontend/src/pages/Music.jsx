import { useContext } from "react"
import Display from "../components/Display"
import Player from "../components/Player"
import Sidebar from "../components/Sidebaar"
import Sideebar from "../components/Sidebar"

import { PlayerContext } from "../context/PlayerContext"
import Header from "../components/Header"

const Music = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className="h-screen   bg-[#0F1014]">
      
        <Header />
            <Sideebar />
      <div className="h-[90%] w-[100% ] flex ml-20">
        <Display/>
      </div>
      <Player className="" />
      <audio ref={audioRef} src={track.file} preload="auto"   className="">

      </audio >
    </div>
  )
}

export default Music