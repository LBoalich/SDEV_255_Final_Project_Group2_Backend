const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    permissions: {
        canEdit: {type: Boolean, default: true},
        canDelete: {type: Boolean, default: true},
        canAdd: {type: Boolean, default: true},
        canDrop: {type: Boolean, default: false},
        canAddToSchedule: {type: Boolean, default: false}
    }
});

module.exports = mongoose.model('Course', courseSchema);