import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow z-20">
      <div className="max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="text-xl font-bold">YourBrand</div>
        <div className="ml-6 flex-1">
          <input placeholder="Search movies, shows..." className="w-1/3 p-2 rounded border" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 border rounded">Subscribe</button>
          <img src="https://via.placeholder.com/34" alt="avatar" className="rounded-full" />
        </div>
      </div>
    </header>
  );
}
