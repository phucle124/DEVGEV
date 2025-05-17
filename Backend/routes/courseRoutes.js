const express = require('express');
const router = express.Router();
const db = require('../config');

// Get all courses
router.get('/', async (req, res) => {
    try {
        const [courses] = await db.promise().query('SELECT * FROM courses');
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get single course
router.get('/:id', async (req, res) => {
    try {
        const [courses] = await db.promise().query(
            'SELECT * FROM courses WHERE id = ?',
            [req.params.id]
        );
        
        if (courses.length === 0) {
            return res.status(404).json({ message: 'Course not found' });
        }
        
        res.json(courses[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create course
router.post('/', async (req, res) => {
    try {
        const { name, description, created_by } = req.body;
        
        const [result] = await db.promise().query(
            'INSERT INTO courses (name, description, created_by) VALUES (?, ?, ?)',
            [name, description, created_by]
        );
        
        res.status(201).json({ 
            message: 'Course created successfully',
            courseId: result.insertId 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update course
router.put('/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        
        const [result] = await db.promise().query(
            'UPDATE courses SET name = ?, description = ? WHERE id = ?',
            [name, description, req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Course not found' });
        }
        
        res.json({ message: 'Course updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete course
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await db.promise().query(
            'DELETE FROM courses WHERE id = ?',
            [req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Course not found' });
        }
        
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 