const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/patients", patientRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});