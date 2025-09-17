import React, { useState, useContext } from 'react';
import api from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { saveAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/auth/login', { email, password });
      saveAuth(res.data.token, res.data.user);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={submit} className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="w-full p-2 mb-3 border rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 mb-4 border rounded" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="w-full py-2 bg-indigo-600 text-white rounded">Login</button>
        <div className="mt-3 text-sm">No account? <Link to="/register" className="text-indigo-600">Register</Link></div>
      </form>
    </div>
  );
}
