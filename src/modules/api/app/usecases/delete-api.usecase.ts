import { Inject, Injectable } from '@nestjs/common';
import { DeleteApiService } from '../../domain/services/delete-api.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class DeleteApiUsecase {
  @Inject()
  private readonly deleteApiService: DeleteApiService;

  async execute(id: number) {
    await this.deleteApiService.execute(id);
    return SingleResponse.buildSuccess();
  }
}
