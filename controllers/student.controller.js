const {GradingDB} = require("../middlewares/utils/connector.service");
const {findStudentByValueQuery, createStudentQuery} = require("../queries/student");
const {generateUUID, generateMatricNumber} = require("../middlewares/utils/char.generator");
const {createStudentSuccess, createStudentExistError} = require("../middlewares/responses/student.responses");
const {databaseError} = require("../middlewares/responses/database.responses");

const StudentController = {

  createStudent: async (req, res) => {
    try {
      let results = await GradingDB.query(createStudentQuery,
        [generateUUID(), req.body.first_name, req.body.last_name, generateMatricNumber(), req.body.email, req.body.password]);
      let data = results['rows'][0];
      const response = createStudentSuccess();
      res.status(response.status).json({status: 'SUCCESS', type: response.type, message: response.message, data});
    } catch (err) {
      const response = databaseError();
      res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
    }
  },

  validateIfStudentExists: async (req, res, next) => {
    try {
      let results = await GradingDB.query(findStudentByValueQuery(`email = '${req.body.email}'`));
      if (results.rowCount > 0) {
        const response = createStudentExistError();
        res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
      } else next();
    } catch (err) {
      const response = databaseError();
      res.status(response.status).json({status: 'FAILED', type: response.type, message: response.message});
    }
  }


}

module.exports = StudentController;