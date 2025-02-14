const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Pong' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});
