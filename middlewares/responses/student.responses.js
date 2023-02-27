const {successCodes, errorCodes} = require("../enums/statuscodes.enums");
const configs = require("../enums/configs.enums");

const createStudentSuccess = () => {
  return {
    status: successCodes.Success201.code, type: successCodes.Success201.type,
    message: `Successfully created a student profile`
  };
}


const createStudentExistError = () => {
  return {
    status: errorCodes.Error400.code, type: errorCodes.Error400.type,
    message: `Student profile with the email already exists`
  };
}


module.exports = {
  createStudentSuccess,
  createStudentExistError
};
