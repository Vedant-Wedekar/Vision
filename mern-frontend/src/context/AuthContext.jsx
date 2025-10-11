import React, { createContext, useEffect, useState } from 'react';
import api from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // always true initially

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const res = await api.get('/api/users/me');
        setUser(res.data);
      } catch (err) {
        console.error('Auth fetch error:', err);
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  // 🔹 Save token + set header instantly after login/register
  const saveAuth = (tokenFromServer, userFromServer) => {
    localStorage.setItem('token', tokenFromServer);
    setToken(tokenFromServer);
    setUser(userFromServer || null);
    api.defaults.headers.common['Authorization'] = `Bearer ${tokenFromServer}`;
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, saveAuth, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
