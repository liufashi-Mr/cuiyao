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

  public static USERNAME_ALREADY_EXISTS: ErrorCodeType = {
    code: '400001',
    message: 'Username already exists',
    httpStatus: 400,
  };

  public static EMAIL_ALREADY_EXISTS: ErrorCodeType = {
    code: '400002',
    message: 'Email already exists',
    httpStatus: 400,
  };

  public static PHONE_ALREADY_EXISTS: ErrorCodeType = {
    code: '400003',
    message: 'Phone number already exists',
    httpStatus: 400,
  };

  public static USER_NOT_FOUND: ErrorCodeType = {
    code: '404001',
    message: 'User not found',
    httpStatus: 404,
  };

  public static PROJECT_NAME_ALREADY_EXISTS: ErrorCodeType = {
    code: '400101',
    message: 'Project name already exists for this owner',
    httpStatus: 400,
  };

  public static PROJECT_NOT_FOUND: ErrorCodeType = {
    code: '404101',
    message: 'Project not found',
    httpStatus: 404,
  };

  public static API_NAME_ALREADY_EXISTS: ErrorCodeType = {
    code: '400201',
    message: 'API name already exists for this project',
    httpStatus: 400,
  };

  public static API_NOT_FOUND: ErrorCodeType = {
    code: '404201',
    message: 'API not found',
    httpStatus: 404,
  };
}

export default ErrorCode;
