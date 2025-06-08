
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on port 3000'));
});

//routes
app.use('/admin', require('./routes/adminRoutes'));
app.use('/bets', require('./routes/betRoutes'));
