const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let history = [];

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  const aiResponse = AI says: ${userMessage};

  history.push({ sender: 'user', text: userMessage });
  history.push({ sender: 'ai', text: aiResponse });

  res.json({ reply: aiResponse });
});

app.get('/api/history', (req, res) => {
  res.json({ history });
});

app.listen(PORT, () => {
  console.log(Backend running at http://localhost:${PORT});
});