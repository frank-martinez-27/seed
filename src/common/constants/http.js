export const HTTP = Object.freeze({
  STATUS: {
    OK: 200,
    MULTIPLE_CHOICES: 300,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    INTERNAL_SERVER_ERROR: 500,
  },
  REQUEST_METHOD: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
  HEADER_FIELD: {
    CONTENT_TYPE: 'Content-Type',
    AUTHORIZATION: 'Authorization',
    X_SATI: 'X-SATI',
    ACCEPT: 'Accept',
  },
  MIME_TYPE: {
    JSON: 'application/json',
  },
  CREDENTIALS: 'credentials',
  SAME_ORIGIN: 'same-origin',
});

export const QUERY_STRING_PARAM = Object.freeze({
  KEY: {
    SERVICE: 'service',
    CAS_SERIVCE: 'casService',
    QUERY: 'query',
  },
  VALUE: {
    FALSE: 'false',
  },
});
