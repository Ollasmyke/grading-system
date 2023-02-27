const express = require('express');
const router = express.Router();
const StudentController = require("../controllers/student.controller");
const Validator = require("../middlewares/utils/validator.service");

router.post('/register',
  Validator("studentValidator", "registerStudent"),
  StudentController.validateIfStudentExists,
  StudentController.createStudent
);

module.exports = router;
