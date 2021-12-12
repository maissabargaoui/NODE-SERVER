const mongoose = require("mongoose");
//define a new data object

const CourseSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        date: { type: Date },
        idPhoto: { type: String },
        
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);

//we want to export this file to the server so it can see the schema
//the data is the Course we made
module.exports = mongoose.model("Course", CourseSchema);
