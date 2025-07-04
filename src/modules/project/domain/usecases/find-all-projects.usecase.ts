import { Injectable } from '@nestjs/common';
import { FindAllProjectsService } from '../services/find-all-projects.service';
import { QueryProjectDto } from '../../client/dto/query-project.dto';

@Injectable()
export class FindAllProjectsUsecase {
  private readonly findAllProjectsService: FindAllProjectsService;

  async execute(queryDto: QueryProjectDto) {
    return this.findAllProjectsService.execute(queryDto);
  }
}
