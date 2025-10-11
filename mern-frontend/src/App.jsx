import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import Player from "./pages/Player";
import TopTrending from "./pages/TopTranding";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import SubscribePage from './pages/SubscribePage';
import { AuthContext } from "./context/AuthContext";
// import { Music } from "lucide-react";
import Music from "./pages/Music";

function Protected({ children }) {
  const { token, loading } = useContext(AuthContext);
  if (loading) return <div className="p-6">Loading...</div>;
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [watchLater, setWatchLater] = useState([]);

  const addToWatchLater = (movie) => {
    if (!watchLater.find((m) => m.id === movie.id)) {
      setWatchLater([...watchLater, movie]);
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <Protected>
            <Home addToWatchLater={addToWatchLater} />
          </Protected>
        }
      />
      
<Route
  path="/top"
  element={
    <Protected>
      <TopTrending addToWatchLater={addToWatchLater} />
    </Protected>
  }
/>

<Route>
  <Route path="/music" element={<Music />} />
</Route>
      <Route
        path="/watchlater"
        element={
          <Protected>
            <WatchLater watchLater={watchLater} />
          </Protected>
        }
      />
      <Route
  path="/category"
  element={
    <Protected>
      <Category addToWatchLater={addToWatchLater} />
    </Protected>
  }
/>
      <Route
        path="/player/:id"
        element={
          <Protected>
            <Player />
          </Protected>
        }
      />


      <Route
      path="/profile"
      element={
       <Protected>
      <Profile />
    </Protected>
  }
/>

 <Route path="/subscribe" element={<SubscribePage />} />

    </Routes>
    

  );
}
