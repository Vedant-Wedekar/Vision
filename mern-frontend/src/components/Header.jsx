// import React from 'react';
// import Log from '../assets/logo.png';

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 right-0 h-14 text-white bg-gradient-to-b from-black to-transparent text-white shadow z-20">
//       <div className="max-w-7xl mx-auto h-full flex items-center px-4">
//         <img className='h-10' src={Log}></img>
//         <div className="text-xl font-bold">Vision</div>
//         <div className="ml-6 flex-1">
//           <input placeholder="Search movies, shows..." className="w-1/3 p-2 rounded border" />
//         </div>

//         <div className="flex items-center space-x-4">
//           <button className="px-3 py-1 border rounded">Subscribe</button>
//           <img src='https://photoslist.org/wp-content/uploads/2024/04/instagram-dp-for-boys.jpg' alt="avatar" className="rounded-full h-10" />
//           <div className="">Ayan Shah</div>
//         </div>
//       </div>
//     </header>
//   );
// }
// import React from 'react';
import Log from '../assets/logo.png';
import { Search } from "lucide-react"
import SearchBar from './SearchBar';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const { user } = useContext(AuthContext);
  
  return (
   <div className='bg-[#0F1014] '>
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0F1014] text-white z-20">
      <div className="max-w-7xl mx-auto h-full flex items-center px-6">
        {/* Logo + Brand */}

        <div className="flex items-center -ml-15 space-x-3 tit">
          <span className="text-2xl font-extrabold tracking-wide">Vision </span>
          <span className="text-2xl font-extrabold tracking-wide"> Sphere</span>
        </div>


<SearchBar />


        {/* Right side buttons */}
        <div className="flex items-center space-x-5 ml-100">
<button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 
text-white font-medium text-sm rounded-lg border border-white/20
backdrop-blur-sm transition-all duration-300">
  Subscribe
</button>


          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMks8CZ8Igv-OE_AYRST5qzyTZDjk0ci5oh4AdTu9KySTNtN2qxuZ2mp9Np2TKUCEbvwY&usqp=CAU"
              alt="avatar"
              className="rounded-full h-10 w-10 object-cover border-2 border-white/20"
            />
          <h1 className="text-xl  font-extrabold text-white tit">{user ? ` ${user.name}` : ''}</h1>

            {/* <span className="text-sm font-medium">Ayan Shah</span> */}
          </div>
        </div>
      </div>
    </header></div>
  );
}
