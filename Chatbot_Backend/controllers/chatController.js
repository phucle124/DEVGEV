const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const handleUserMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: message,
      max_tokens: 200,
    });

    const reply = completion.choices[0].text.trim();
    res.json({ reply });
  } catch (error) {
    console.error('Lỗi xử lý tin nhắn:', error.message);
    res.status(500).json({ error: 'Lỗi xử lý yêu cầu.' });
  }
};

module.exports = { handleUserMessage };
