import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { AuthContext } from './context/AuthContext';

function Protected({ children }) {
  const { token, loading } = useContext(AuthContext);
  if (loading) return <div className="p-6">Loading...</div>;
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Protected><Home /></Protected>} />
    </Routes>
  );
}
