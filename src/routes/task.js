const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    // res.send('API task is going here');
    const task = await Task.find();
    res.json(task);
});

router.post('/', async (req, res) => {
    new Task()
    console.log(new Task);
});

module.exports = router;