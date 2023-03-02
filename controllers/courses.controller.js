const {GradingDB} = require("../middlewares/utils/connector.service");
const {generateUUID, generateCourseCode} = require("../middlewares/utils/char.generator");
const {databaseError} = require("../middlewares/responses/database.responses");
const {createCourseQuery, getCoursesQuery, updateCourseQuery, deleteCourseQuery} = require("../queries/courses");
const {
  createCourseSuccess,
  getCoursesSuccess,
  updateCourseSuccess, deleteCourseSuccess
} = require("../middlewares/responses/course.responses");

const CourseController = {

  getCourses: async (req, res) => {
    try {
      let results = await GradingDB.query(getCoursesQuery(''), [20, 0]);
      const response = getCoursesSuccess();
      res.status(response.status).json({
        status: 'SUCCESS',
        type: response.type,
        message: response.message,
        data: results['rows']
      });
    } catch (err) {
      const response = databaseError();
      res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
    }
  },

  createCourse: async (req, res) => {
    try {
      let results = await GradingDB.query(createCourseQuery,
        [generateUUID(), req.body.name, generateCourseCode(req.body.name), req.body.tutor_name, req.body.description, req.body.unit]);
      let data = results['rows'][0];
      const response = createCourseSuccess();
      res.status(response.status).json({status: 'SUCCESS', type: response.type, message: response.message, data});
    } catch (err) {
      const response = databaseError();
      res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
    }
  },

  editCourse: async (req, res) => {
    try {
      let results = await GradingDB.query(updateCourseQuery(`code = '${req.params.code}'`, res.locals.query));
      const response = updateCourseSuccess();
      res.status(response.status).json({
        status: 'SUCCESS',
        type: response.type,
        message: response.message,
        data: results['rows']
      });
    } catch (err) {
      const response = databaseError();
      res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
    }
  },

  deleteCourse: async (req, res) => {
    try {
      await GradingDB.query(deleteCourseQuery(`code = '${req.params.code}'`));
      const response = deleteCourseSuccess();
      res.status(response.status).json({status: 'SUCCESS', type: response.type, message: response.message});
    } catch (err) {
      const response = databaseError();
      res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
    }
  },

  formatUpdateQuery(req, res, next) {
    let newQuery = "", index = 0, queryCount = Object.entries(req.body).length;
    for (let forEach in req.body) {
      index++;
      const setValue = `${index === 1 ? "SET " : ""}${forEach} = '${req.body[forEach]}'${index < queryCount ? ", " : ""}`;
      newQuery = `${newQuery}${setValue}`
    }
    res.locals.query = newQuery;
    next();
  },


}

module.exports = CourseController;