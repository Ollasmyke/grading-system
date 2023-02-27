const {errorCodes} = require("../enums/statuscodes.enums");

const databaseError = () => {
  const message = "Failure, Invalid Params, Database Error or Server Error";
  return {status: errorCodes.Error500.code, type: errorCodes.Error500.type, message};
}

module.exports = {databaseError};
