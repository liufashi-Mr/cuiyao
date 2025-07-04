import { Inject, Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { PROJECT_REPOSITORY } from 'src/shared/constants/repository';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class FindProjectService {
  @Inject(PROJECT_REPOSITORY)
  private readonly repository: typeof Project;

  async execute(id: number) {
    const project = await this.repository.findByPk(id);
    if (!project) {
      throw ExceptionFactory.bizException(ErrorCode.PROJECT_NOT_FOUND);
    }
    return project;
  }
}
