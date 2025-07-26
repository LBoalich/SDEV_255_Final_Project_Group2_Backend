// I believe this was meant to be the purpose of the Course.js, but I wasn't sure with how it was set up...
// This manages the schema for entered courses in add_course.ejs


const mongoose = require('mongoose')
const Schema = mongoose.Schema
var Course = new Schema({
    courseName: {
        type: String,
        required : true
    },
    courseDescription: {
        type: String,
        required : true
    },
    courseSubject: {
        type: String,
        required : true
    },
    courseCredit: {
        type: Number,
        required : true
    }
})


module.exports = mongoose.model('Course', Course)