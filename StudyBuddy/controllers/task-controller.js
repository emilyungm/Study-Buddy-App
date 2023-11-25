const mongoose = require('mongoose');

const Task = require('../models/task');
const Unit = require('../models/unit');

module.exports = {

    newTask: async function (req, res) {
        try {
            let newTaskDetails = req.body;
            let task = new Task(newTaskDetails);
            await task.save();

            res.json(task);
           
        } catch (error) {
            console.error('Error creating the task:', error);
            return res.status(400).json({ error: 'Internal Server Error' });
        }
    },

    deleteTask: async function (req, res) {
        try {
            await Task.deleteOne({ _id: req.body._id });
            res.json({"acknowledged": true})

        } catch (error) {
            console.error('Error deleting the task:', error);
            return res.status(400).json({ error: 'Internal Server Error' });
        }
    },

    getTasks: async function (req, res) {
        try {
            let tasks = await Task.find({});
            res.json(tasks);
        } catch (error) {
            console.error('Error fetching the tasks', error);
            return res.status(400).json({ error: 'Internal Server Error' });
        }
    },

    getOneTask: async function (req, res) {
        try {
            let task = await Task.findOne({_id: req.params.taskID});
            res.json(task);

        } catch (error) {
            console.error('Error fetching the task', error);
            return res.status(400).json({ error: 'Internal Server Error' });
        }
    },

    editTask: async function (req, res) {
        try {
            let task = await Task.findOne({_id: req.body._id})
        } catch (error) {
            console.error('Error editing/updating the task details', error);
            return res.status(400).json({ error: 'Internal Server Error' });
        }
    },

    updateScore: async function (req, res) {
        
    },

    markAsSubmitted: async function (req, res) {

    },

    updateProgress: async function (req, res) {

    }
}