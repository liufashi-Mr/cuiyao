import { Response } from './Response';

export class MultiResponse<T> extends Response {
  private data: T[];

  getData(): T[] {
    if (null == this.data) {
      return [];
    }
    return this.data;
  }

  setData(data: T[]): void {
    this.data = data;
  }

  isEmpty(): boolean {
    return this.data == null || !!this.data;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  static buildSuccess<T>(): MultiResponse<T> {
    const response = new MultiResponse<T>();
    response.setSuccess(true);
    return response;
  }

  static buildFailure<T>(
    errCode: string,
    errMessage: string,
  ): MultiResponse<T> {
    const response = new MultiResponse<T>();
    response.setSuccess(false);
    response.setErrCode(errCode);
    response.setErrMessage(errMessage);
    return response;
  }

  static of<T>(data: T[]): MultiResponse<T> {
    if (data == null) {
      data = [];
    }
    const response = new MultiResponse<T>();
    response.setSuccess(true);
    response.setData(data);
    return response;
  }
}
