import { DTO } from './DTO';

export class Response extends DTO {
  private success: boolean;

  private errorCode: string;

  private errorMessage: string;

  isSuccess(): boolean {
    return this.success;
  }

  setSuccess(success: boolean): void {
    this.success = success;
  }

  getErrCode(): string {
    return this.errorCode;
  }

  setErrCode(errorCode: string): void {
    this.errorCode = errorCode;
  }

  getErrMessage(): string {
    return this.errorMessage;
  }

  setErrMessage(errorMessage: string): void {
    this.errorMessage = errorMessage;
  }

  toString(): string {
    return (
      'Response [success=' +
      this.success +
      ', errorCode=' +
      this.errorCode +
      ', errorMessage=' +
      this.errorMessage +
      ']'
    );
  }

  static buildSuccess(): Response {
    const response = new Response();
    response.setSuccess(true);
    return response;
  }

  static buildFailure(errorCode: string, errorMessage: string): Response {
    const response = new Response();
    response.setSuccess(false);
    response.setErrCode(errorCode);
    response.setErrMessage(errorMessage);
    return response;
  }
}
