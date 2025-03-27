const express = require("express");
const db = require("../config");

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  db.query("SELECT id, name, email FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
