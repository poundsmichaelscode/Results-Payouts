
const express = require('express');
const router = express.Router();
const Bet = require('../models/Bet');
const Game = require('../models/Game');

// Bet History
router.get('/history', async (req, res) => {
  const { user_id } = req.query;
  const bets = await Bet.find({ userId: user_id }).sort({ _id: -1 });
  res.json(bets);
});

// View Game Results
router.get('/results', async (req, res) => {
  const results = await Game.find({ result: { $exists: true } })
    .sort({ _id: -1 })
    .limit(20);
  res.json(results);
});

module.exports = router;
