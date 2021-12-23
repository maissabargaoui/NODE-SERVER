const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
        {
                name: { type: String },
                email: { type: String },
                address: { type: String },
                latitude: { type: Number },
                longitude: { type: Number },
                password: { type: String },
                phone: { type: String },
                idPhoto: { type: String },
                role: { type: String },
                isVerified: { type: Boolean },
                typeInstructeur: { type: String },
                prixParCour: { type: Number },

                neverNotified: { type: Boolean },
                coursNotifications: { type: Array },

                courses: [{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Course"
                }],

                favorites: [{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Favorite"
                }]
        },
        {
                timestamps: { currentTime: () => Date.now() }
        }
);

module.exports = mongoose.model("User", UserSchema);