const mongoose = require('mongoose');

const WatchLaterSchema = new mongoose.Schema({
  movieId: { type: String, required: true },
  title: { type: String, required: true },
  poster: { type: String, default: "" },
  addedAt: { type: Date, default: Date.now }
}, { _id: false });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  paidSubscriber: { type: Boolean, default: false },
  watchLater: { type: [WatchLaterSchema], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
