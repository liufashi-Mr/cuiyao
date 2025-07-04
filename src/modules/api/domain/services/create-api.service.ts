import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../entities/api.entity';
import { API_REPOSITORY } from 'src/shared/constants/repository';
import { CreateApiDto } from '../../client/dto/create-api.dto';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';

@Injectable()
export class CreateApiService {
  @Inject(API_REPOSITORY)
  private readonly repository: typeof Api;

  async execute(createApiDto: CreateApiDto) {
    // 检查同一 project 下接口名是否重复
    const existing = await this.repository.findOne({
      where: {
        name: createApiDto.name,
        projectId: createApiDto.projectId,
      },
    });
    if (existing) {
      throw ExceptionFactory.bizException({
        code: '400201',
        message: 'API name already exists for this project',
        httpStatus: 400,
      });
    }
    return this.repository.create(createApiDto);
  }
}
