const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'success' });
});

router.get('/task/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  res
    .status(200)
    .json({ msg: 'success', data: `Retrieved Task Number: #${id}` });
});

router.post('/task', (req, res) => {
  console.log(req.body);
  const task = req.body;
  res.status(201).json({ msg: 'success, data sent', data: task });
});

module.exports = router;
