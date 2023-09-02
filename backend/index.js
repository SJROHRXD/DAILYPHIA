const express = require('express');
const connectDB = require('./db');

require('./scheduler');

const app = express();
const port = 3001;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}! 🌼🍒`);
});