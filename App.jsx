import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/history')
      .then((res) => res.json())
      .then((data) => setMessages(data.history));
  }, []);

  const handleSend = async (text) => {
    const userMsg = { text, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();
    const aiMsg = { text: data.reply, sender: 'ai' };
    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <div>
      <ChatWindow messages={messages} onSend={handleSend} />
    </div>
  );
};

export default App;