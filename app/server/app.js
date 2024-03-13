// Import required modules
import config from "config";
import express from "express";
import userRoutes from "./routes/userRoute.js";
// DB Connect in Config Folder
import "./utils/dbConnect.js";

// Create an instance of Express
const app = express();
const PORT = config.get("PORT");

// Middleware - Parse incoming requests as JSON
app.use(express.json());

//UserRoutes
app.use('/api', userRoutes);

// Define routes
app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

// Example route with a parameter
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Handle 404 errors - Route not found
// app.use((req, res, next) => {
//   res.status(404).send("404 Not Found");
// });

// Handle other errors
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("500 - Internal Server Error");
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT 🚀 ${PORT}`);
});
