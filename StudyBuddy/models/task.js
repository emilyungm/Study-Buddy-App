const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    unit: {
        // type: mongoose.model,
        // required: true
        type: String
    },

    dueDate: {
        type: Date,
        required: true
    },

    submitted: {
        type: Boolean,
        default: false
    },

    type: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        default: 0
    },

    progress: {
        type: Number,
        default: 0,
        validate: {
			validator: function (value) {
				return value >= 0 && value <= 100;
			},
			message: "Progress must be between 0 and 100 percent"
		},

    },

    weighting: {
        type: Number,
        required: true,
        validate: {
			validator: function (value) {
				return value >= 1 && value <= 100;
			},
			message: "Weighting must be between 1 and 100 percent"
		},

    }
})

module.exports = mongoose.model('Task', TaskSchema);