import bcrypt from "bcryptjs";
import config from "config";
import cors from 'cors';
import express from "express";
import jwt from 'jsonwebtoken';
import User from "./models/Users.js";
import Battery from "./models/Battery.js"
import "./utils/dbConnect.js";
import { fetchData } from "./controllers/BatteryController.js";

const app = express();
const PORT = process.env.PORT || config.get("PORT");
const JWT_SECRET = process.env.JWT_SECRET || 'ketoo';

// Middleware - Parse incoming requests as JSON
app.use(express.json());

// Use cors middleware
app.use(cors());

setInterval(() => {
  fetchData()
    .then(() => console.log("Data fetched successfully"))
    .catch(error => console.error("Failed to fetch data:", error));
}, 5000); 

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", async (req, res) => {
  try {
    console.log("API Hit")
    const users = await User.find(); // Use Mongoose's find method to fetch all users
    res.json(users); // Respond with the fetched users
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt

    // Create a new user and save to DB
    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save(); // Save the user to the database

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login API")
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Compare the submitted password with the one in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Define a payload for the JWT
    const payload = {
      user: {
        id: user.id, // You can add more user-specific details here if needed
      },
    };

    // Generate a JWT token
    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      // If the password matches and no error in generating the token, send the token
      res.json({ message: "Login Successfull", token });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example route with a parameter
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.get("/battery", async (req, res) => {
  try {
    // Assuming your model is named BatteryData and you've enabled timestamps in your schema
    const latestTwoEntries = await Battery.find()
      .sort({ createdAt: -1 }) // Sort in descending order to get the latest documents
      .limit(2); // Limit to the latest two documents

    res.json(latestTwoEntries);

  } catch (error) {
    console.error("Failed to fetch battery data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/greet", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ message: `Hello, ${name}!` });
  } else {
    res
      .status(400)
      .json({ error: "Name parameter is missing in the request body." });
  }
});

// Handle 404 errors - Route not found
// app.use((req, res, next) => {
//   res.status(404).send("404 - Not Found");
// });

// Handle other errors
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("500 - Internal Server Error");
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT 🚀 ${PORT}`);
});
