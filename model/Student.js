const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema ({
    studentName: {
        type: String,
        required: true
    },
    enrolledCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
    // permission: {
    //     canEdit: {type: Boolean, default: false},
    //     canDelete: {type: Boolean, default: false},
    //     canAdd: {type: Boolean, default: false},
    //     canDrop: {type: Boolean, default: false},
    //     canAddToSchedule: {type: Boolean, default: true}
    // }
});

module.exports = mongoose.model('Student', studentSchema);