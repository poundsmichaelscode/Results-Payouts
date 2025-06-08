
const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Bet = require('../models/Bet');
const Wallet = require('../models/Wallet');

// Set result
router.post('/set-result', async (req, res) => {
  const { game_id, result } = req.body;

  const game = await Game.findByIdAndUpdate(game_id, { result }, { new: true });
  if (!game) return res.status(404).json({ message: 'Game not found' });

  // Update bets
  const bets = await Bet.find({ gameId: game_id });
  for (let bet of bets) {
    const isWin = bet.prediction === result;
    const payout = isWin ? bet.amount * bet.odd : 0;

    bet.result = isWin ? 'won' : 'lost';
    bet.payout = payout;
    await bet.save();

    if (isWin) {
      await Wallet.findOneAndUpdate(
        { userId: bet.userId },
        { $inc: { balance: payout } }
      );
    }
  }

  res.json({ message: 'Result set and payouts processed' });
});

module.exports = router;
