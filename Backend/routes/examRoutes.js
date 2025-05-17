const express = require('express');
const router = express.Router();
const db = require('../config');

// Get all exams
router.get('/', async (req, res) => {
    try {
        const [exams] = await db.promise().query('SELECT * FROM exams');
        res.json(exams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get single exam
router.get('/:id', async (req, res) => {
    try {
        const [exams] = await db.promise().query(
            'SELECT * FROM exams WHERE id = ?',
            [req.params.id]
        );
        
        if (exams.length === 0) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        
        res.json(exams[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create exam
router.post('/', async (req, res) => {
    try {
        const { course_id, title, date } = req.body;
        
        const [result] = await db.promise().query(
            'INSERT INTO exams (course_id, title, date) VALUES (?, ?, ?)',
            [course_id, title, date]
        );
        
        res.status(201).json({ 
            message: 'Exam created successfully',
            examId: result.insertId 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update exam
router.put('/:id', async (req, res) => {
    try {
        const { title, date } = req.body;
        
        const [result] = await db.promise().query(
            'UPDATE exams SET title = ?, date = ? WHERE id = ?',
            [title, date, req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        
        res.json({ message: 'Exam updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete exam
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await db.promise().query(
            'DELETE FROM exams WHERE id = ?',
            [req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        
        res.json({ message: 'Exam deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 