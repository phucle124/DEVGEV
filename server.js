require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const authRoutes = require("./Backend/routes/authRoutes");
const userRoutes = require("./Backend/routes/userRoutes");
// const courseRoutes = require("./Backend/routes/courseRoutes");
// const examRoutes = require("./Backend/routes/examRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.SERVER_PORT
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/exams", examRoutes);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = db;
