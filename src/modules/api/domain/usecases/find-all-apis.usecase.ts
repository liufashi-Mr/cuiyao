import { Injectable } from '@nestjs/common';
import { FindAllApisService } from '../services/find-all-apis.service';
import { QueryApiDto } from '../../client/dto/query-api.dto';

@Injectable()
export class FindAllApisUsecase {
  private readonly findAllApisService: FindAllApisService;

  async execute(queryDto: QueryApiDto) {
    return this.findAllApisService.execute(queryDto);
  }
}
