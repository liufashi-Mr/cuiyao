export type ErrorCodeType = {
  code: string;
  message: string;
  httpStatus: number;
};

export class ErrorCode {
  public static INTERNAL_SERVER_ERROR: ErrorCodeType = {
    code: '500000',
    message: 'Internal Server Error',
    httpStatus: 500,
  };

  public static INVALID_PARAM: ErrorCodeType = {
    code: '422001',
    message: 'Invalid Parameter',
    httpStatus: 422,
  };

  public static DATABASE_DATA_TOO_LONG: ErrorCodeType = {
    code: '422002',
    message: 'Parameter data too long',
    httpStatus: 422,
  };

  public static MISSING_PARAM: ErrorCodeType = {
    code: '422003',
    message: 'Parameter is missing',
    httpStatus: 422,
  };

  public static RESET_PASSWORD_TOKEN_INVALID: ErrorCodeType = {
    code: '400103',
    message: 'Reset password token is invalid',
    httpStatus: 400,
  };

  public static INVALID_TOKEN: ErrorCodeType = {
    code: '401005',
    message: 'The token is invalid',
    httpStatus: 401,
  };

  public static EXPIRED_TOKEN: ErrorCodeType = {
    code: '401005',
    message: 'The token has expired',
    httpStatus: 401,
  };

  public static DEVICE_COUNT_OVERLOAD: ErrorCodeType = {
    code: '403000',
    message: 'No access',
    httpStatus: 403,
  };
}

export default ErrorCode;
