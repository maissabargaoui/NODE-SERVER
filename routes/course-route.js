const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/course-controller");

router.route("/")
    .get(CourseController.getCourse)
    .post(CourseController.addCourse)
    .put(CourseController.editCourse)
    .delete(CourseController.deleteCourse);

router.delete("/deleteAllCourses", CourseController.deleteAllCourses)

module.exports = router;