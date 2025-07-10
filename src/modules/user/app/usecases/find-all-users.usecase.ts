import { Injectable } from '@nestjs/common';
import { FindAllUsersService } from '../../domain/services/find-all-users.service';
import { QueryUserDto } from '../../app/dto/query-user.dto';

@Injectable()
export class FindAllUsersUsecase {
  private readonly findAllUsersService: FindAllUsersService;

  async execute(queryDto: QueryUserDto) {
    return this.findAllUsersService.execute(queryDto);
  }
}
