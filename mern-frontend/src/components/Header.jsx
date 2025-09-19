import React from 'react';
import Log from '../assets/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow z-20">
      <div className="max-w-7xl mx-auto h-full flex items-center px-4">
        <img className='h-10' src={Log}></img>
        <div className="text-xl font-bold">Vision</div>
        <div className="ml-6 flex-1">
          <input placeholder="Search movies, shows..." className="w-1/3 p-2 rounded border" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 border rounded">Subscribe</button>
          <img src='https://photoslist.org/wp-content/uploads/2024/04/instagram-dp-for-boys.jpg' alt="avatar" className="rounded-full h-10" />
          <div className="">Ayan Shah</div>
        </div>
      </div>
    </header>
  );
}
