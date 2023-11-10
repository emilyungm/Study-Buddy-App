const mongoose = require("mongoose");

const UnitSchema = mongoose.Schema({

    code: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        required: true
    },

    score: {
        type: Number,
        default: 0
    },

    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
});

module.exports = mongoose.model('Unit', UnitSchema);