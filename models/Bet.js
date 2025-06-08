
const mongoose = require('mongoose');
const BetSchema = new mongoose.Schema({
  userId: String,
  gameId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  odd: Number,
  prediction: String,
  result: String, // 'won' | 'lost'
  payout: Number,
});
module.exports = mongoose.model('Bet', BetSchema);
