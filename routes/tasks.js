const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'success' });
});

router.post('/task', (req, res) => {
  console.log(req.body);
  const task = req.body;
  res.status(201).json({ msg: 'success, data sent', data: task });
});

module.exports = router;
