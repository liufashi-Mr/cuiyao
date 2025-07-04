import { Injectable } from '@nestjs/common';
import { DeleteProjectService } from '../services/delete-project.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class DeleteProjectUsecase {
  private readonly deleteProjectService: DeleteProjectService;

  async execute(id: number) {
    await this.deleteProjectService.execute(id);
    return SingleResponse.buildSuccess();
  }
}
