import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Hàm gửi tin nhắn đến backend Node.js
  const sendMessage = async (userMessage) => {
    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      return data.reply;
    } catch (err) {
      console.error('Lỗi gửi tin nhắn:', err);
      return 'Đã xảy ra lỗi khi gửi tin nhắn.';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { sender: 'user', text: userMessage }]);
    setInput('');

    const botReply = await sendMessage(userMessage);
    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);

    // 👇 Gửi log lên Zapier thông qua backend
    try {
      await fetch('http://localhost:3001/api/chat/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          reply: botReply
        })
      });
    } catch (err) {
      console.error('Lỗi gửi log về Zapier:', err);
    }
  };

  return (
    <div className="chat-widget">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Gửi</button>
      </div>
    </div>
  );
};

export default ChatWidget;
