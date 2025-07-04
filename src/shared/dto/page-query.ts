import { Query } from './Query';

export abstract class PageQuery extends Query {
  static readonly ASC: string = 'ASC';

  static readonly DESC: string = 'DESC';

  private static readonly DEFAULT_PAGE_SIZE: number = 10;

  private pageSize: number = PageQuery.DEFAULT_PAGE_SIZE;

  private pageIndex = 1;

  private orderBy: string;

  private orderDirection: string = PageQuery.DESC;

  private groupBy: string;

  private needTotalCount = true;

  getPageIndex(): number {
    if (this.pageIndex < 1) {
      return 1;
    }
    return this.pageIndex;
  }

  setPageIndex(pageIndex?: number): PageQuery {
    this.pageIndex = pageIndex ?? 1;
    return this;
  }

  getPageSize(): number {
    if (this.pageSize < 1) {
      this.pageSize = PageQuery.DEFAULT_PAGE_SIZE;
    }
    return this.pageSize;
  }

  setPageSize(pageSize: number): PageQuery {
    if (pageSize < 1) {
      pageSize = PageQuery.DEFAULT_PAGE_SIZE;
    }
    this.pageSize = pageSize;
    return this;
  }

  getOffset(): number {
    return (this.getPageIndex() - 1) * this.getPageSize();
  }

  getOrderBy(): string {
    return this.orderBy;
  }

  setOrderBy(orderBy: string): PageQuery {
    this.orderBy = orderBy;
    return this;
  }

  getOrderDirection(): string {
    return this.orderDirection;
  }

  setOrderDirection(orderDirection: string): PageQuery {
    if (
      PageQuery.ASC.toLowerCase() == orderDirection.toLowerCase() ||
      PageQuery.DESC.toLowerCase() == orderDirection.toLowerCase()
    ) {
      this.orderDirection = orderDirection;
    }
    return this;
  }

  getGroupBy(): string {
    return this.groupBy;
  }

  setGroupBy(groupBy: string): PageQuery {
    this.groupBy = groupBy;
    return this;
  }

  isNeedTotalCount(): boolean {
    return this.needTotalCount;
  }

  setNeedTotalCount(needTotalCount: boolean): PageQuery {
    this.needTotalCount = needTotalCount;
    return this;
  }

  getLimitOffset() {
    return { limit: this.getPageSize(), offset: this.getOffset() };
  }
}
