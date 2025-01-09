const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const alertRoutes = require("./routes/alertRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(alertRoutes);

// Connect to Database
connectDB();

module.exports = app;
