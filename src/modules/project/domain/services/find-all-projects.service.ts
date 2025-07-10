import { Inject, Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { PROJECT_REPOSITORY } from 'src/shared/constants/repository';
import { PaginationResponse } from '@/shared/dto/pagination-response';
import { QueryProjectDto } from '../../app/dto/query-project.dto';
import { Op } from 'sequelize';

@Injectable()
export class FindAllProjectsService {
  @Inject(PROJECT_REPOSITORY)
  private readonly repository: typeof Project;

  async execute(queryDto: QueryProjectDto) {
    const where: any = {};
    if (queryDto.name) {
      where.name = { [Op.like]: `%${queryDto.name}%` };
    }
    if (queryDto.status) {
      where.status = queryDto.status;
    }
    if (queryDto.ownerId) {
      where.ownerId = queryDto.ownerId;
    }
    const order = queryDto.getOrderBy()
      ? ([
          [queryDto.getOrderBy(), queryDto.getOrderDirection()],
        ] as unknown as any)
      : ([['created_at', 'DESC']] as unknown as any);
    const { count, rows } = await this.repository.findAndCountAll({
      where,
      order,
      limit: queryDto.getPageSize(),
      offset: queryDto.getOffset(),
    });
    return PaginationResponse.of(rows, {
      page: queryDto.getPageIndex(),
      pageSize: queryDto.getPageSize(),
      total: count,
    });
  }
}
