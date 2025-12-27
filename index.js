const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const houseRoutes = require('./routes/house.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('HouseGen Project API is running!');
});

// Routes
app.use('/api/houses', houseRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/housegen')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
