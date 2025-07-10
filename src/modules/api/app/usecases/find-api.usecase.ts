import { Inject, Injectable } from '@nestjs/common';
import { FindApiService } from '../../domain/services/find-api.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class FindApiUsecase {
  @Inject()
  private readonly findApiService: FindApiService;

  async execute(id: number) {
    const api = await this.findApiService.execute(id);
    return SingleResponse.of(api);
  }
}
