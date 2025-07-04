import { Response } from './Response';

export class SingleResponse<T> extends Response {
  private data: T;

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }

  static buildSuccess() {
    const response = new SingleResponse();
    response.setSuccess(true);
    return response;
  }

  static buildFailure(errCode: string, errMessage: string) {
    const response = new SingleResponse();
    response.setSuccess(false);
    response.setErrCode(errCode);
    response.setErrMessage(errMessage);
    return response;
  }

  static of<T>(data: T): SingleResponse<T> {
    const response = new SingleResponse<T>();
    response.setSuccess(true);
    response.setData(data);
    return response;
  }
}
