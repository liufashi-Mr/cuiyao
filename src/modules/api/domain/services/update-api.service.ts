import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../entities/api.entity';
import { API_REPOSITORY } from 'src/shared/constants/repository';
import { UpdateApiDto } from '../../app/dto/update-api.dto';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { Op } from 'sequelize';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class UpdateApiService {
  @Inject(API_REPOSITORY)
  private readonly repository: typeof Api;

  async execute(id: number, updateApiDto: UpdateApiDto) {
    const api = await this.repository.findByPk(id);
    if (!api) {
      throw ExceptionFactory.bizException(ErrorCode.API_NOT_FOUND);
    }
    if (updateApiDto.name && updateApiDto.projectId) {
      const existing = await this.repository.findOne({
        where: {
          name: updateApiDto.name,
          projectId: updateApiDto.projectId,
          id: { [Op.ne]: id },
        },
      });
      if (existing) {
        throw ExceptionFactory.bizException(ErrorCode.API_NAME_ALREADY_EXISTS);
      }
    }
    return api.update(updateApiDto);
  }
}
