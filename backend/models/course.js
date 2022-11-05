const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
        title: {
            type: String,
            require: [true, "Title is invalid"],
            minLength:[5, 'title must be 4 Characters and more'],
            maxLength:[40, "Characters cannot exceed more than 40 words "]
        },
        description: {
            type: String,
            require: [true, "Description is invalid"]
        }
});

module.exports = mongoose.model('Course', courseSchema);