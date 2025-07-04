import { Inject, Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { PROJECT_REPOSITORY } from 'src/shared/constants/repository';
import { UpdateProjectDto } from '../../client/dto/update-project.dto';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { Op } from 'sequelize';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class UpdateProjectService {
  @Inject(PROJECT_REPOSITORY)
  private readonly repository: typeof Project;

  async execute(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.repository.findByPk(id);
    if (!project) {
      throw ExceptionFactory.bizException(ErrorCode.PROJECT_NOT_FOUND);
    }
    if (updateProjectDto.name && updateProjectDto.ownerId) {
      const existing = await this.repository.findOne({
        where: {
          name: updateProjectDto.name,
          ownerId: updateProjectDto.ownerId,
          id: { [Op.ne]: id },
        },
      });
      if (existing) {
        throw ExceptionFactory.bizException(
          ErrorCode.PROJECT_NAME_ALREADY_EXISTS,
        );
      }
    }
    return project.update(updateProjectDto);
  }
}
