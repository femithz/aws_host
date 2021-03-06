let mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    student_id: Number,
    name: String,
    email: String,
    class: String,
})

module.exports = mongoose.model('Student', studentSchema);