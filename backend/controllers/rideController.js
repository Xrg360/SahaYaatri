// Import necessary modules
const firestore = require("../config/firebaseConfig");

// Function to create a new ride
async function createRide(req, res) {
  try {
    // Extract ride data from request body
    const { driverId, riderId, pickupLocation, dropoffLocation, status } = req.body;

    // Create a new ride document in Firestore
    const rideDocRef = await firestore.collection("rides").add({
      driverId,
      riderId,
      pickupLocation,
      dropoffLocation,
      status,
    });

    res.status(201).json({ rideId: rideDocRef.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create ride" });
  }
}

module.exports = {
  createRide,
};
