const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Root route (important for Render)
app.get("/", (req, res) => {
  res.send("Hospital Management Backend API Running 🚀");
});

// Patient Routes
app.use("/patients", patientRoutes);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});