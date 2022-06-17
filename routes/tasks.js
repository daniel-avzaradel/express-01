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

router.patch('/task/:id', (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ msg: 'success', data: `Task Number: #${id} was updated` });
});

router.delete('/task/:id', (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ msg: 'success', data: `Task Number: #${id} was deleted` });
});

router.post('/task', (req, res) => {
  console.log(req.body);
  const task = req.body;
  res.status(201).json({ msg: 'success, data sent', data: task });
});

module.exports = router;
