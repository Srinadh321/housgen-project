const express = require('express');
const router = express.Router();
const houseController = require('../controllers/house.controller');

// POST → add house
router.post('/add', houseController.addHouse);

// GET → fetch all houses
router.get('/', houseController.getAllHouses);

module.exports = router;
