const express = require("express");
const db = require("../config");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const [users] = await db.promise().query('SELECT id, username, email, full_name, created_at FROM users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single user
router.get("/:id", async (req, res) => {
  try {
    const [users] = await db.promise().query(
      'SELECT id, username, email, full_name, created_at FROM users WHERE id = ?',
      [req.params.id]
    );
    
    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(users[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user
router.put("/:id", async (req, res) => {
  try {
    const { username, email, full_name } = req.body;
    
    const [result] = await db.promise().query(
      'UPDATE users SET username = ?, email = ?, full_name = ? WHERE id = ?',
      [username, email, full_name, req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.promise().query(
      'DELETE FROM users WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
