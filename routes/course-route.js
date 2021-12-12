const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/course-controller");
const upload = require('../middlewares/storage');

/**
* @swagger
* /api/course/:
*   description: The courses managing API
*   get:
*     summary: Returns the list of your the courses
*     tags: [Courses]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list courses
*         content:
*           application/json:
*       403:
*         description: user error
*/

/**
* @swagger
* /api/course/:
*   description: The courses managing API
*   post:
*     summary: Add course
*     tags: [Courses]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list courses
*         content:
*           application/json:
*       403:
*         description: user error
*/

/**
* @swagger
* /api/course/:
*   description: The courses managing API
*   put:
*     summary: Edit course
*     tags: [Courses]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list courses
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.route("/")
    .get(CourseController.getCourse)
    .post(upload.single('image'), CourseController.addCourse)
    .put(upload.single('image'), CourseController.editCourse)


/**
* @swagger
* /api/favorite/delete:
*   description: The courses managing API
*   delete:
*     summary: Delete course
*     tags: [Courses]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list courses
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/delete", CourseController.deleteCourse)

/**
* @swagger
* /api/favorite/delete:
*   description: The courses managing API
*   delete:
*     summary: Delete all the courses
*     tags: [Courses]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list courses
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.delete("/deleteAllCourses", CourseController.deleteAllCourses)

module.exports = router;
