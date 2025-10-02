import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const naviagte = useNavigate()
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          
            onClick={()=>naviagte(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
            onClick={()=>naviagte(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
        
          <p className="bg-red-100 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Music</p>
        <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Podcasts</p>
      </div>
    </>
  );
};

export default Navbar;
