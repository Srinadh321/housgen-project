const House = require('../models/house.model');

// ADD house
exports.addHouse = async (req, res) => {
  try {
    const house = new House(req.body);
    await house.save();
    res.status(201).json(house);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all houses
exports.getAllHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
