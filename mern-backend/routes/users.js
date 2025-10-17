const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");



router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error("❌ Error fetching profile:", err.message);
    res.status(500).send("Server error");
  }
});



router.get("/watchlater", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Clean invalid entries silently
    user.watchLater = (user.watchLater || []).filter(
      (m) => m.movieId && m.title
    );
    await user.save();

    res.json({ watchLater: user.watchLater || [] });
  } catch (err) {
    console.error("❌ Error fetching watch later:", err.message);
    res.status(500).send("Server error");
  }
});



router.post("/watchlater", auth, async (req, res) => {
  try {
    console.log("📩 Incoming body:", req.body);

    const { movieId, title, poster } = req.body;
    if (!movieId || !title) {
      return res
        .status(400)
        .json({ msg: "Missing required fields: movieId or title" });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.watchLater = (user.watchLater || []).filter(
      (m) => m.movieId && m.title
    );

    const exists = user.watchLater.some(
      (m) => String(m.movieId) === String(movieId)
    );
    if (exists) {
      return res.status(400).json({ msg: "Already in watch later" });
    }

    user.watchLater.unshift({
      movieId: String(movieId),
      title,
      poster: poster || "",
    });

    await user.save();
    console.log("✅ Added movie:", title);

    res.json(user.watchLater);
  } catch (err) {
    console.error("❌ SERVER ERROR (POST /watchlater):", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});



router.delete("/watchlater/:movieId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.watchLater = user.watchLater.filter(
      (m) => String(m.movieId) !== String(req.params.movieId)
    );

    await user.save();
    res.json(user.watchLater);
  } catch (err) {
    console.error("❌ Error removing from watch later:", err.message);
    res.status(500).send("Server error");
  }
});


router.put("/subscribe", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.paidSubscriber = true;
    await user.save();

    res.json({ msg: "Subscription activated successfully", user });
  } catch (err) {
    console.error("❌ Error updating subscription:", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
