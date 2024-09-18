import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';

@Injectable()
export class FindAllUsersService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute() {
    return this.repository.findAll();
  }
}
