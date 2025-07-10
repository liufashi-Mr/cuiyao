import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../entities/api.entity';
import { API_REPOSITORY } from 'src/shared/constants/repository';
import { PaginationResponse } from '@/shared/dto/pagination-response';
import { QueryApiDto } from '../../app/dto/query-api.dto';
import { Op } from 'sequelize';

@Injectable()
export class FindAllApisService {
  @Inject(API_REPOSITORY)
  private readonly repository: typeof Api;

  async execute(queryDto: QueryApiDto) {
    const where: any = {};
    if (queryDto.name) {
      where.name = { [Op.like]: `%${queryDto.name}%` };
    }
    if (queryDto.status) {
      where.status = queryDto.status;
    }
    if (queryDto.projectId) {
      where.projectId = queryDto.projectId;
    }
    if (queryDto.createdBy) {
      where.createdBy = queryDto.createdBy;
    }
    const order = queryDto.getOrderBy()
      ? ([
          [queryDto.getOrderBy(), queryDto.getOrderDirection()],
        ] as unknown as any)
      : ([['createdAt', 'DESC']] as unknown as any);
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
