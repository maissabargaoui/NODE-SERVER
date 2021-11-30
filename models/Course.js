const mongoose = require("mongoose");
//define a new data object

const CourseSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        date: { type: Date },
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

//we want to export this file to the server so it can see the schema
//the data is the Course we made
module.exports = mongoose.model("Course", CourseSchema);
