const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    // res.send('API task is going here');
    const task = await Task.find();
    res.json(task);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await Task.save();
    res.json({
        status: 'Task saved'
    });
});

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params, req.body);
    res.json({
        status: 'Task updated'
    });
})

module.exports = router;