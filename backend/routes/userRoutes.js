const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to get user profile by ID
router.get("/:userId", userController.getUserProfile);

// Route to update user profile
router.put("/:userId", userController.updateUserProfile);

// Add more routes for managing user-related actions like settings, preferences, etc.

module.exports = router;
