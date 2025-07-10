import { Injectable } from '@nestjs/common';
import { UpdateProjectService } from '../services/update-project.service';
import { SingleResponse } from '@/shared/dto/single-response';
import { UpdateProjectDto } from '../../app/dto/update-project.dto';

@Injectable()
export class UpdateProjectUsecase {
  private readonly updateProjectService: UpdateProjectService;

  async execute(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.updateProjectService.execute(
      id,
      updateProjectDto,
    );
    return SingleResponse.of(project);
  }
}
