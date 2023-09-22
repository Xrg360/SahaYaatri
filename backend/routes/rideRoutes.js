const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");

// Route to create a new ride request
router.post("/create", rideController.createRide);

// Route to fetch ride details by ID
router.get("/:rideId", rideController.getRideById);

// Route to fetch all ride requests
router.get("/", rideController.getAllRides);

// Add more routes for updating, accepting, or completing rides as needed

module.exports = router;
