const mongoose = require("mongoose");
//define a new data object

const UserSchema = new mongoose.Schema({
        name: { type: String },
        email: { type: String },
        address: { type: String },
        latitude: { type: Number },
        longitude: { type: Number },        
        password: { type: String },
        phone: { type: String },
        idPhoto: { type: String },
        role: { type: String },
        isVerified: { type: Boolean}
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

//we want to export this file to the server so it can see the schema
//the data is the student we made
module.exports = mongoose.model("User", UserSchema);
