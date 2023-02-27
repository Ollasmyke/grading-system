const errorCodes = {
  Error400: {code: 400, type: 'Bad Request'},
  Error401: {code: 401, type: 'Unauthorised'},
  Error403: {code: 403, type: 'Forbidden'},
  Error404: {code: 404, type: 'Not Found'},
  Error405: {code: 405, type: 'Method Not Allowed'},
  Error500: {code: 500, type: 'Internal Server Error'},
  Error501: {code: 501, type: 'Not Implemented'},
}

const successCodes = {
  Success200: {code: 200, type: 'Ok'},
  Success201: {code: 201, type: 'Created'},
  Success202: {code: 202, type: 'Accepted'},
  Success204: {code: 204, type: 'No Content'},
}

const tokenResponse = {
  TOKEN_EXPIRED: 'TokenExpiredError',
  JWT_TOKEN_ERROR: 'JsonWebTokenError',
  TOKEN_NOT_FOUND: 'Token not found',
  INVALID_TOKEN: 'Invalid Token',
  EXPIRED: 'Token Expired',
}

module.exports = {errorCodes, successCodes, tokenResponse};
