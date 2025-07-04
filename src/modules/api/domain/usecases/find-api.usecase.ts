import { Injectable } from '@nestjs/common';
import { FindApiService } from '../services/find-api.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class FindApiUsecase {
  private readonly findApiService: FindApiService;

  async execute(id: number) {
    const api = await this.findApiService.execute(id);
    return SingleResponse.of(api);
  }
}
