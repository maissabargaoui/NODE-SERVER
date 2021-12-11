let Favorite = require("../models/Favorite");
const User = require("../models/User");

exports.getFavorites = async (req, res) => {
    res.status(201).send({ favorites: await Favorite.find({ "user": req.body.user }).populate("user course"), message: "Success" })
}

exports.addFavorite = async (req, res) => {
    const { date, course, user } = req.body;

    let favorite = await Favorite.findOne({ course, user })

    console.log(favorite)
    
    if (favorite) {
        res.status(500).send({ message: "Already exists" });
        console.log("Already exists")
    } else {
        const newFavorite = new Favorite();

        newFavorite.date = date;
        newFavorite.course = course;
        newFavorite.user = user;

        await User.findOneAndUpdate(
            { _id: user },
            {
                $push: {
                    favorites: [newFavorite._id]
                }
            }
        );

        newFavorite.save();

        res.status(201).send({ favorite: newFavorite, message: "Success" });
    }
}

exports.deleteFavorite = async (req, res) => {
    console.log(req.body)
    res.status(201).send({ favorite: await Favorite.findById(req.body._id).remove(), message: "Success" });
}

exports.deleteAllFavorites = async (req, res) => {
    Favorite.remove({}, function (err, favorite) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ message: "Deleted all" });
    })
}
