import { IsOptional, IsString, IsEnum, IsInt, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryApiDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  @Max(100)
  per_page?: number = 10;

  @IsOptional()
  @IsString()
  sort?: string = 'created_at';

  @IsOptional()
  @IsString()
  direction?: 'asc' | 'desc' = 'desc';

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(['DRAFT', 'PUBLISHED', 'DEPRECATED'])
  status?: 'DRAFT' | 'PUBLISHED' | 'DEPRECATED';

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  projectId?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  createdBy?: number;

  getPageIndex(): number {
    return this.page || 1;
  }

  getPageSize(): number {
    return this.per_page || 10;
  }

  getOffset(): number {
    return (this.getPageIndex() - 1) * this.getPageSize();
  }

  getOrderBy(): string {
    return this.sort || 'created_at';
  }

  getOrderDirection(): string {
    return this.direction || 'desc';
  }
}
