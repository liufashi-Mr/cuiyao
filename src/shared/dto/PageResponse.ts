import { Response } from './Response';

export class PageResponse<T> extends Response {
  private totalCount = 0;

  private pageSize = 1;

  private pageIndex = 1;

  private data: T[];

  getTotalCount(): number {
    return this.totalCount;
  }

  setTotalCount(totalCount: number): void {
    this.totalCount = totalCount;
  }

  getPageSize(): number {
    if (this.pageSize < 1) {
      return 1;
    }
    return this.pageSize;
  }

  setPageSize(pageSize: number): void {
    if (pageSize < 1) {
      this.pageSize = 1;
    } else {
      this.pageSize = pageSize;
    }
  }

  getPageIndex(): number {
    if (this.pageIndex < 1) {
      return 1;
    }
    return this.pageIndex;
  }

  setPageIndex(pageIndex: number): void {
    if (pageIndex < 1) {
      this.pageIndex = 1;
    } else {
      this.pageIndex = pageIndex;
    }
  }

  getData(): T[] {
    if (null == this.data) {
      return [];
    }
    return this.data;
  }

  setData(data: T[]): void {
    this.data = data;
  }

  getTotalPages(): number {
    return this.totalCount % this.pageSize == 0
      ? this.totalCount / this.pageSize
      : this.totalCount / this.pageSize + 1;
  }

  isEmpty(): boolean {
    return this.data == null || !!this.data;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  static buildSuccess<T>(): PageResponse<T> {
    const response = new PageResponse<T>();
    response.setSuccess(true);
    return response;
  }

  static buildFailure<T>(errCode: string, errMessage: string): PageResponse<T> {
    const response = new PageResponse<T>();
    response.setSuccess(false);
    response.setErrCode(errCode);
    response.setErrMessage(errMessage);
    return response;
  }

  static ofEmpty<T>(pageSize: number, pageIndex: number): PageResponse<T> {
    const response = new PageResponse<T>();
    response.setSuccess(true);
    response.setData([]);
    response.setTotalCount(0);
    response.setPageSize(pageSize);
    response.setPageIndex(pageIndex);
    return response;
  }

  static of<T>(
    data: T[],
    totalCount: number,
    pageSize: number,
    pageIndex: number,
  ): PageResponse<T> {
    const response = new PageResponse<T>();
    response.setSuccess(true);
    response.setData(data);
    response.setTotalCount(totalCount);
    response.setPageSize(pageSize);
    response.setPageIndex(pageIndex);
    return response;
  }
}
