import { Inject, Injectable } from '@nestjs/common';
import { UpdateApiService } from '../../domain/services/update-api.service';
import { SingleResponse } from '@/shared/dto/single-response';
import { UpdateApiDto } from '../dto/update-api.dto';

@Injectable()
export class UpdateApiUsecase {
  @Inject()
  private readonly updateApiService: UpdateApiService;

  async execute(id: number, updateApiDto: UpdateApiDto) {
    const api = await this.updateApiService.execute(id, updateApiDto);
    return SingleResponse.of(api);
  }
}
