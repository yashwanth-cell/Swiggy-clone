const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

// Get all restaurants
router.get("/", async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

// Add a new restaurant
router.post("/", async (req, res) => {
    try {
        const { name, location, menu } = req.body;
        const restaurant = new Restaurant({ name, location, menu });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
