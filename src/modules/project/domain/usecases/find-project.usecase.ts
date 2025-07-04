import { Injectable } from '@nestjs/common';
import { FindProjectService } from '../services/find-project.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class FindProjectUsecase {
  private readonly findProjectService: FindProjectService;

  async execute(id: number) {
    const project = await this.findProjectService.execute(id);
    return SingleResponse.of(project);
  }
}
