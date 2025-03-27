const express = require("express");
const db = require("../config");

const router = express.Router();

// Register User
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "User registered successfully!" });
    }
  );
});

// Login User
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length > 0) {
        res.json({ message: "Login successful!", user: results[0] });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  );
});

module.exports = router;
