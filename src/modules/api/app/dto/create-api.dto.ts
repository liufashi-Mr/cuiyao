import {
  IsString,
  IsOptional,
  IsEnum,
  IsInt,
  MaxLength,
} from 'class-validator';

export class CreateApiDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsEnum(['DRAFT', 'PUBLISHED', 'DEPRECATED'])
  status?: 'DRAFT' | 'PUBLISHED' | 'DEPRECATED';

  @IsInt()
  projectId: number;

  @IsInt()
  createdBy: number;
}
