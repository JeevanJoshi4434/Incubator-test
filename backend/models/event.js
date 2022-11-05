const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    Title: {
        type: String,
        require: [true, "Title is invalid"],
        minLength:[5, 'title must be 4 Characters and more'],
        maxLength:[40, "Characters cannot exceed more than 40 words "]
    },
    Description: {
        type: String,
        require: [true, "Description is invalid"]
    },
    onDate: {
        type: String,
        require: [true, "Must enter the envent's start date"]
    },
    Event_ID: {
        type: String,
        require: [true, "Must enter the event's ID"]
    }
});

module.exports = mongoose.model("Event", eventSchema);