const express = require('express');
const Validator = require("../middlewares/utils/validator.service");
const CourseController = require("../controllers/courses.controller");
const router = express.Router();

router.post('/create',
  Validator("studentValidator", "createCourse"),
  CourseController.createCourse,
);

router.get('/', CourseController.getCourses);

router.patch('/edit-course/:code',
  Validator("studentValidator", "editCourse"),
  CourseController.formatUpdateQuery,
  CourseController.editCourse
);

router.delete('/delete-course/:code', CourseController.deleteCourse);

module.exports = router;
