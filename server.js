const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', tasks);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
