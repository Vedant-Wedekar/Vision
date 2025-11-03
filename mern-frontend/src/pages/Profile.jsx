import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user)
    return <div className="profile-loading">Loading your profile...</div>;

  const formattedJoinDate = new Date(user.createdAt).toLocaleDateString();
  const formattedUpdateDate = new Date(user.updatedAt).toLocaleDateString();

  return (
    <div className="profile-container mt-10">
      <Header />
            <Sidebar />
      <div className="profile-glass-card">
        <div className="profile-top">
          <div className="profile-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User Avatar"
              className="profile-avatar"
            />
            <div className="profile-text">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <div
                className={`subscription-status ${
                  user.paidSubscriber ? "premium" : "free"
                }`}
              >
                {user.paidSubscriber ? "🌟 Premium Member" : "Free Member"}
              </div>
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <hr className="profile-divider" />

        {/* --- Account Details --- */}
        <div className="profile-details">
          <h3>Account Details</h3>
          <div className="details-grid">
            <div>
              <span className="detail-label">Name:</span>
              <span>{user.name}</span>
            </div>
            <div>
              <span className="detail-label">Email:</span>
              <span>{user.email}</span>
            </div>
            <div>
              <span className="detail-label">Membership:</span>
              <span>
                {user.paidSubscriber ? "Premium" : "Free (Upgrade soon!)"}
              </span>
            </div>
            <div>
              <span className="detail-label">Joined:</span>
              <span>{formattedJoinDate}</span>
            </div>
            <div>
              <span className="detail-label">Last Updated:</span>
              <span>{formattedUpdateDate}</span>
            </div>
          </div>
        </div>

        {/* --- Watch Later Section --- */}
        <div className="watchlater-section">
          <h3>🎬 Your Watch Later List</h3>
          {user.watchLater && user.watchLater.length > 0 ? (
            <div className="movie-grid">
              {user.watchLater.map((movie) => (
                <div key={movie.movieId} className="movie-card">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <div className="movie-overlay">
                    <p className="movie-title">{movie.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-text">No movies in your Watch Later list yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
