const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema ({
    teacherName: {
        type: String,
        required: true,
    },
    createdCourses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }]
    // permissions: {
    //     canEdit: {type: Boolean, default: true},
    //     canDelete: {type: Boolean, default: true},
    //     canAdd: {type: Boolean, default: true},
    //     canDrop: {type: Boolean, default: false},
    //     canAddToSchedule: {type: Boolean, default: false}
    // }
});

//module.exports = mongoose.model('Course', courseSchema);
module.exports = mongoose.model('Teacher', teacherSchema);