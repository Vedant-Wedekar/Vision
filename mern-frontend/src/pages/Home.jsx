import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const sampleMovies = [
  { movieId: 'm1', title: 'Movie One', poster: 'https://via.placeholder.com/200x300' },
  { movieId: 'm2', title: 'Movie Two', poster: 'https://via.placeholder.com/200x300' },
  { movieId: 'm3', title: 'Movie Three', poster: 'https://via.placeholder.com/200x300' }
];

export default function Home() {
  const { user } = useContext(AuthContext);
  const [watchLaterLocal, setWatchLaterLocal] = useState(user?.watchLater || []);

  const addToWatchLater = async (movie) => {
    try {
      const res = await api.post('/api/users/watchlater', movie);
      setWatchLaterLocal(res.data);
      alert('Added to Watch Later');
    } catch (err) {
      alert(err.response?.data?.msg || 'Failed to add');
    }
  };

  return (
    <div className='bg-[#0F1014] a'>
      <Header />
      <Sidebar />
      <HeroSection addToWatchLater={addToWatchLater} />

      {/* main content area, leave spacing for header and sidebar */}
      <main className="ml-56 pt-16 px-6 text-">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-white">Welcome{user ? `, ${user.name}` : ''}</h1>

          <section>
            <h2 className="text-xl mb-3 text-white">Popular</h2>
            <div className="grid grid-cols-3 gap-4">
              {sampleMovies.map(m => (
                <div key={m.movieId} className="bg-white p-3 rounded shadow">
                  <img src={m.poster} alt={m.title} className="w-full h-48 object-cover rounded" />
                  <div className="mt-2 flex items-center justify-between">
                    <div>{m.title}</div>
                    <button onClick={() => addToWatchLater(m)} className="px-2 py-1 border rounded text-sm">Watch Later</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer/>
    </div>
  );
}
