import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const items = [
    { to: '/', label: 'Home' },
    { to: '/top', label: 'Top Trending' },
    { to: '/music', label: 'Music' },
    { to: '/category', label: 'Category' },
    { to: '/profile', label: 'Profile' },
    { to: '/watchlater', label: 'Watch Later' }
  ];

  return (
    <nav className="fixed left-0 top-14 bottom-0 w-56 bg-white border-r overflow-auto p-4">
      <ul className="space-y-3">
        {items.map(it => (
          <li key={it.to}>
            <NavLink to={it.to} className={({ isActive }) => `block px-3 py-2 rounded ${isActive ? 'bg-indigo-50 font-semibold' : 'text-gray-700'}`}>
              {it.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
