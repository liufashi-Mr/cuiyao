import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';
import { PaginationResponse } from '@/shared/dto/pagination-response';
import { QueryUserDto } from '../../client/dto/query-user.dto';
import { Op } from 'sequelize';

@Injectable()
export class FindAllUsersService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute(queryDto: QueryUserDto) {
    const where: any = {};

    // 构建查询条件
    if (queryDto.username) {
      where.username = { [Op.like]: `%${queryDto.username}%` };
    }
    if (queryDto.email) {
      where.email = { [Op.like]: `%${queryDto.email}%` };
    }
    if (queryDto.firstName) {
      where.first_name = { [Op.like]: `%${queryDto.firstName}%` };
    }
    if (queryDto.lastName) {
      where.last_name = { [Op.like]: `%${queryDto.lastName}%` };
    }
    if (queryDto.phone) {
      where.phone = { [Op.like]: `%${queryDto.phone}%` };
    }
    if (queryDto.gender) {
      where.gender = queryDto.gender;
    }
    if (queryDto.isActive !== undefined) {
      where.is_active = queryDto.isActive;
    }

    // 构建排序
    const order = queryDto.getOrderBy()
      ? [
          [queryDto.getOrderBy(), queryDto.getOrderDirection()] as [
            string,
            string,
          ],
        ]
      : [['created_at', 'DESC'] as [string, string]];

    // 执行查询
    const { count, rows } = await this.repository.findAndCountAll({
      where,
      order,
      limit: queryDto.getPageSize(),
      offset: queryDto.getOffset(),
    });

    // 返回 PaginationResponse，字段与 GitHub 风格一致
    return PaginationResponse.of(rows, {
      page: queryDto.getPageIndex(),
      pageSize: queryDto.getPageSize(),
      total: count,
    });
  }
}
