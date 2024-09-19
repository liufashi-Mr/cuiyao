export abstract class BaseException extends Error {
  readonly serialVersionUID = Symbol('unique');

  private errorCode: string;
  private errorMessage = '';
  private extra: object = {};
  private e: Error | undefined;

  constructor(errMessage: string, errCode: string, extra?: object, e?: Error) {
    super();
    this.extra = extra ? extra : {};
    this.errorMessage = errMessage;
    this.errorCode = errCode;
    this.e = e;
    Error.captureStackTrace(this, this.constructor);
  }

  getErrorCode(): string {
    return this.errorCode;
  }

  setErrorCode(errCode: string): void {
    this.errorCode = errCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }

  setErrorMessage(errMessage: string): void {
    this.errorMessage = errMessage;
  }

  getExtra(): object {
    return this.extra;
  }

  setExtra(extra: object) {
    return extra ?? this.extra;
  }
}
