import { Injectable } from '@nestjs/common';
import { DeleteApiService } from '../services/delete-api.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class DeleteApiUsecase {
  private readonly deleteApiService: DeleteApiService;

  async execute(id: number) {
    await this.deleteApiService.execute(id);
    return SingleResponse.buildSuccess();
  }
}
