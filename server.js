const express = require('express');
const app = express();

require('dotenv').config();

// middleware
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'success' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
