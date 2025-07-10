import { Injectable } from '@nestjs/common';
import { CreateProjectService } from '../services/create-project.service';
import { SingleResponse } from '@/shared/dto/single-response';
import { CreateProjectDto } from '../../app/dto/create-project.dto';

@Injectable()
export class CreateProjectUsecase {
  private readonly createProjectService: CreateProjectService;

  async execute(createProjectDto: CreateProjectDto) {
    const project = await this.createProjectService.execute(createProjectDto);
    return SingleResponse.of(project);
  }
}
