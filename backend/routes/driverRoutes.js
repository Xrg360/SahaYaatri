const express = require("express");
const router = express.Router();
const driverController = require(",../controllers/drivercontroller");

// Route to get a list of available drivers
router.get("/available", driverController.getAvailableDrivers);

// Route to accept a ride request
router.post("/accept/:rideId", driverController.acceptRide);

// Route to complete a ride
router.post("/complete/:rideId", driverController.completeRide);

// Add more routes for driver-specific actions like updating location, checking ride history, etc.

module.exports = router;
