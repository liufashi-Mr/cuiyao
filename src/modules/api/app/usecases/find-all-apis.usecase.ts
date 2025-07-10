import { Inject, Injectable } from '@nestjs/common';
import { FindAllApisService } from '../../domain/services/find-all-apis.service';
import { QueryApiDto } from '../dto/query-api.dto';

@Injectable()
export class FindAllApisUsecase {
  @Inject()
  private readonly findAllApisService: FindAllApisService;

  async execute(queryDto: QueryApiDto) {
    return this.findAllApisService.execute(queryDto);
  }
}
