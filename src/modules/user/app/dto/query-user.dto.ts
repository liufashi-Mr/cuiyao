import {
  IsOptional,
  IsString,
  IsEnum,
  IsBoolean,
  IsInt,
  Min,
  Max,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryUserDto {
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

  // 排序参数
  @IsOptional()
  @IsString()
  sort?: string = 'created_at';

  @IsOptional()
  @IsString()
  direction?: 'asc' | 'desc' = 'desc';

  // 筛选参数
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(['MALE', 'FEMALE', 'OTHER'])
  gender?: 'MALE' | 'FEMALE' | 'OTHER';

  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isActive?: boolean;

  // 分页计算方法
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
