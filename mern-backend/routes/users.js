const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// GET /api/users/me  - get profile (protected)
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST /api/users/watchlater  - add to watch later (protected)
router.post('/watchlater', auth, async (req, res) => {
  const { movieId, title, poster } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (user.watchLater.some(m => m.movieId === movieId)) return res.status(400).json({ msg: 'Already in watch later' });

    user.watchLater.unshift({ movieId, title, poster });
    await user.save();
    res.json(user.watchLater);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE /api/users/watchlater/:movieId  - remove (protected)
router.delete('/watchlater/:movieId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.watchLater = user.watchLater.filter(m => m.movieId !== req.params.movieId);
    await user.save();
    res.json(user.watchLater);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
  