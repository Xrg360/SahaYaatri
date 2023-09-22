// Import necessary modules
const firestore = require("../config/firebaseConfig");

// Function to get user profile by ID
async function getUserProfile(req, res) {
  try {
    // Extract user ID from request parameters
    const userId = req.params.userId;

    // Retrieve user profile from Firestore
    const userDoc = await firestore.collection("users").doc(userId).get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      res.status(200).json(userData);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
}

module.exports = {
  getUserProfile,
};
