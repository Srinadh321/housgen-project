const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/HousGen')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Test route
app.get('/', (req, res) => {
    res.send('HousGen backend is running!');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
