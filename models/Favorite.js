const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
    {
        date: { type: Date },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    },
    {
        timestamps: { currentTime: () => Date.now() }
    }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
