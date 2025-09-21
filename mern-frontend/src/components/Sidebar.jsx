import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const items = [
    { to: '/', label: 'Home' },
    { to: '/top', label: 'Top Trending' },
    { to: '/music', label: 'Music' },
    { to: '/category', label: 'Category' },
    { to: '/profile', label: 'Profile' },
    { to: '/watch-later', label: 'Watch Later' }  // ✅ Fixed path
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed left-0 top-14 bottom-0 bg-gradient-to-r from-black from-25% to-transparent to-100% text-white border-r overflow-auto p-4">
      <ul className="space-y-3 pt-10">
        {items.map(it => (
          <li key={it.to}>
            <NavLink
              to={it.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${isActive ? 'text-red-500' : 'text-white'}`
              }
            >
              {it.label}
            </NavLink>
          </li>
        ))}
        {/* Logout Button */}
        <li>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-3 py-2 rounded bg-red-600 hover:bg-red-700 mt-6"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
