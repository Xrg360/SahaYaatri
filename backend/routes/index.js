const express = require("express");
const router = express.Router();

// Import and use individual route modules
const authRoutes = require("./authRoutes");
const rideRoutes = require("./rideRoutes");
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/rides", rideRoutes);
router.use("/users", userRoutes);

module.exports = router;
