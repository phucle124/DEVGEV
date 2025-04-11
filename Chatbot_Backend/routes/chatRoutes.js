const express = require('express');
const { handleUserMessage } = require('../controllers/chatController');

const router = express.Router();

// Route xử lý tin nhắn từ người dùng
router.post('/', handleUserMessage);

module.exports = router;
