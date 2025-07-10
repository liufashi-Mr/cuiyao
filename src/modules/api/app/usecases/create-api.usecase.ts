import { Inject, Injectable } from '@nestjs/common';
import { CreateApiService } from '../../domain/services/create-api.service';
import { SingleResponse } from '@/shared/dto/single-response';
import { CreateApiDto } from '../dto/create-api.dto';

@Injectable()
export class CreateApiUsecase {
  @Inject()
  private readonly createApiService: CreateApiService;

  async execute(createApiDto: CreateApiDto) {
    const api = await this.createApiService.execute(createApiDto);
    return SingleResponse.of(api);
  }
}
