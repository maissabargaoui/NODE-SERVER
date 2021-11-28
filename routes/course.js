const { verify } = require("crypto");
const Course = require("../models/Course");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCourse = new Course(req.body);

  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE 

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCourse);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE

  router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id);
      res.status(200).json("Course has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //GET Course

  router.get("/find/:id", async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      res.status(200).json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //GET ALL Courses
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let courses;
  
      if (qNew) {
        courses = await Course.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        courses = await Course.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        courses = await Course.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;







module.exports = router;
