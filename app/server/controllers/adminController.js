// adminController.js

import Admin from "../models/Admins.js"; // Import the Admins model or any other required dependencies

// Controller function to handle a specific route (e.g., GET /admin)
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find(); // Fetch admins from the database using the User model
    res.status(200).json(admins); // Respond with the fetched admins in JSON format
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Other controller functions for handling different routes related to the "Admins" resource

// Export all the controller functions you want to use in your routes
export default {
  getAdmins,
  // Other controller functions
};
