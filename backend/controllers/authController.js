// Import necessary modules and Firebase
const firebase = require("firebase/app");
require("firebase/auth");

// Function to register a new user
async function registerUser(req, res) {
  try {
    // Extract user registration data from request body
    const { email, password, name, role } = req.body;

    // Create a new user in Firebase Authentication
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Create a corresponding user document in Firestore
    await firestore.collection("users").doc(user.uid).set({
      name,
      email,
      role,
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
}

// Function to log in a user
async function loginUser(req, res) {
  try {
    // Extract user login data from request body
    const { email, password } = req.body;

    // Authenticate user with Firebase
    await firebase.auth().signInWithEmailAndPassword(email, password);

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Login failed" });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
