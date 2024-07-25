export enum HTTP_RESPONSE_STATUS {
  INTERNAL_SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
}

/**
 * Converts an HTTP error status code to its corresponding error message.
 *
 * @param status  The HTTP [error status code](https://tools.ietf.org/html/rfc2616#section-6.1.1)
 * @returns A string object containing the HTTP error message for the given status code.
 */
export function decodeHttpStatus(status: number): string {
  switch (status) {
    case 0:
      return 'Server not available'; // https://stackoverflow.com/questions/19858251/what-does-http-status-code-0-mean
    case 200:
      return 'OK';
    case 204:
      return 'No data';
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 402:
      return 'Payment Required';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    case 405:
      return 'Method Not Allowed';
    case 406:
      return 'Not Acceptable';
    case 407:
      return 'Proxy Authentication Required';
    case 408:
      return 'Request Time-out';
    case 409:
      return 'Conflict';
    case 410:
      return 'Gone';
    case 411:
      return 'Length Required';
    case 412:
      return 'Precondition Failed';
    case 413:
      return 'Request Entity Too Large';
    case 414:
      return 'Request-URI Too Large';
    case 415:
      return 'Unsupported Media Type';
    case 416:
      return 'Requested range not satisfiable';
    case 417:
      return 'Expectation Failed';
    case 500:
      return 'Internal Server Error';
    case 501:
      return 'Not Implemented';
    case 502:
      return 'Bad Gateway';
    case 503:
      return 'Service Unavailable';
    case 504:
      return 'Gateway Time-out';
    case 505:
      return 'HTTP Version not supported';
    default:
      return 'Unknown status';
  }
}
