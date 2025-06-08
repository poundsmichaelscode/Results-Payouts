
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  teams: String,
  result: String, // e.g., 'home_win', 'draw'
});
module.exports = mongoose.model('Game', GameSchema);
