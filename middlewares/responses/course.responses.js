const {successCodes, errorCodes} = require("../enums/statuscodes.enums");

const createCourseSuccess = () => {
  return {
    status: successCodes.Success201.code, type: successCodes.Success201.type,
    message: `Successfully created a Course profile`
  };
}

const getCoursesSuccess = () => {
  return {
    status: successCodes.Success200.code, type: successCodes.Success200.type,
    message: `Successfully fetched all Courses profile`
  };
}

const createCourseExistError = () => {
  return {
    status: errorCodes.Error400.code, type: errorCodes.Error400.type,
    message: `Course profile with the email already exists`
  };
}

const updateCourseSuccess = () => {
  return {
    status: successCodes.Success200.code, type: successCodes.Success200.type,
    message: `Successfully updated a Course profile`
  };
}

const deleteCourseSuccess = () => {
  return {
    status: successCodes.Success200.code, type: successCodes.Success200.type,
    message: `Successfully deleted a Course profile`
  };
}


module.exports = {
  createCourseSuccess,
  getCoursesSuccess,
  createCourseExistError,
  updateCourseSuccess,
  deleteCourseSuccess
};
