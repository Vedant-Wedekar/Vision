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
import React from 'react';
import Log from '../assets/logo.png';

export default function Header() {
  return (
   <div className='bg-[#0F1014] '>
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0F1014] text-white z-20">
      <div className="max-w-7xl mx-auto h-full flex items-center px-6">
        {/* Logo + Brand */}

        <div className="flex items-center -ml-15 space-x-3">
          {/* <img className="h-10 w-auto" src={Log} alt="Logo" /> */}
          <span className="text-2xl font-extrabold tracking-wide">Vision </span>
          <span className="text-2xl font-extrabold tracking-wide"> Sphere</span>
        </div>

        {/* Search bar */}
      {/* <div className="ml-8 flex-1">
  <input
    placeholder="Search movies, shows..."
    className="w-2/3 bg-white/10 hover:bg-white/15 placeholder-gray-400 
    text-white text-sm px-4 py-2 rounded-lg border border-white/20 
    backdrop-blur-sm outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30
    transition duration-300"
  />
</div> */}


        {/* Right side buttons */}
        <div className="flex items-center space-x-5 ml-240">
<button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 
text-white font-medium text-sm rounded-lg border border-white/20
backdrop-blur-sm transition-all duration-300">
  Subscribe
</button>


          <div className="flex items-center space-x-2">
            <img
              src="https://photoslist.org/wp-content/uploads/2024/04/instagram-dp-for-boys.jpg"
              alt="avatar"
              className="rounded-full h-10 w-10 object-cover border-2 border-white/20"
            />
            <span className="text-sm font-medium">Ayan Shah</span>
          </div>
        </div>
      </div>
    </header></div>
  );
}
