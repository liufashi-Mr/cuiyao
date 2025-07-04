import { Inject, Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { PROJECT_REPOSITORY } from 'src/shared/constants/repository';
import { CreateProjectDto } from '../../client/dto/create-project.dto';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { Op } from 'sequelize';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class CreateProjectService {
  @Inject(PROJECT_REPOSITORY)
  private readonly repository: typeof Project;

  async execute(createProjectDto: CreateProjectDto) {
    // 检查同一 owner 下项目名是否重复
    const existing = await this.repository.findOne({
      where: {
        name: createProjectDto.name,
        ownerId: createProjectDto.ownerId,
      },
    });
    if (existing) {
      throw ExceptionFactory.bizException(
        ErrorCode.PROJECT_NAME_ALREADY_EXISTS,
      );
    }
    return this.repository.create(createProjectDto);
  }
}
