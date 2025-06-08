// models/Wallet.js
const mongoose = require('mongoose');
const WalletSchema = new mongoose.Schema({
  userId: String,
  balance: Number,
});
module.exports = mongoose.model('Wallet', WalletSchema);
