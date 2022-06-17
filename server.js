const express = require('express');
const app = express();

require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'success' });
});

app.post('/task', (req, res) => {
  console.log(req.body);
  const task = req.body;
  res.status(201).json({ msg: 'success, data sent', data: task });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
