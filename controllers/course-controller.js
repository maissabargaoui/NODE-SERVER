let Course = require("../models/Course")

exports.getCourse = async (req, res) => {

    var course;
    if (req.body._id) {
        course = await Course.findById(req.body._id).populate("user")
    } else {
        course = await Course.find().populate("user")
    }

    res.status(201).send({ course , message : "Success" })
}

exports.addCourse = async (req, res) => {
    const { title , description, user } = req.body;

    const newCourse = new Course();
    
    newCourse.title = title;
    newCourse.description = description;
    newCourse.idPhoto = req.file.filename;
    newCourse.user = user;
    newCourse.save();

    res.status(201).send({ course: "success", course: newCourse });
}

exports.editCourse = async (req, res) => {
    const { _id, title , description } = req.body;

    let course = await Course.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                title : title,
                description : description,
                idPhoto : req.file.filename
            }
        }
    );

    res.status(201).send({ course: "success", course: course });
};

exports.deleteCourse = async (req, res) => {
    const course = await Course.findById(req.body._id).remove()
    res.status(201).send({ course: "success", course: course });
}

exports.deleteAllCourses = async (req, res) => {
    Course.remove({}, function (err, course) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ course: "No data" });
    })
}