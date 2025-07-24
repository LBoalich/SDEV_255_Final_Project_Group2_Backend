const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    creditHours: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);