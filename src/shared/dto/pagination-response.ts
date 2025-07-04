import { Response } from './Response';
export type Pagination = {
  page: number;
  total: number;
  perPage: number;
  totalPages: number;
  nextPage: null | number;
  prevPage: null | number;
};

const defaultMeta = {
  page: 0,
  total: 0,
  perPage: 0,
  totalPages: 0,
  nextPage: null,
  prevPage: null,
};

export class PaginationResponse<T> extends Response {
  private meta: Pagination;

  private data: T[];

  getMeta() {
    if (!this.meta) {
      return defaultMeta;
    }
    return this.meta;
  }

  setMeta(page: number, pageSize: number, total: number) {
    this.meta = {} as Pagination;

    this.meta.page = page || defaultMeta.page;

    this.meta.total = total || defaultMeta.total;

    this.meta.perPage = pageSize || defaultMeta.perPage;

    const totalPages =
      total && pageSize ? Math.ceil(total / pageSize) : defaultMeta.totalPages;
    this.meta.totalPages = totalPages;

    const prevPage = page - 1 > 0 ? page - 1 : defaultMeta.prevPage;
    this.meta.prevPage = prevPage;

    const nextPage = page + 1 <= totalPages ? page + 1 : defaultMeta.nextPage;
    this.meta.nextPage = nextPage;
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

  static ofEmpty<T>(): PaginationResponse<T> {
    const response = new PaginationResponse<T>();
    response.setSuccess(true);
    response.setData([]);
    response.setMeta(0, 0, 0);
    return response;
  }

  static of<T>(
    data: T[],
    pagination: { page: number; pageSize: number; total: number } = {
      page: 0,
      pageSize: 0,
      total: 0,
    },
  ): PaginationResponse<T> {
    const response = new PaginationResponse<T>();
    response.setSuccess(true);
    response.setData(data);
    response.setMeta(pagination.page, pagination.pageSize, pagination.total);
    return response;
  }
}
