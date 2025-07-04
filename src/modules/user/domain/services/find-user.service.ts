import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class FindUserService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute(id: number) {
    const user = await this.repository.findByPk(id);
    if (!user) {
      throw ExceptionFactory.bizException(ErrorCode.USER_NOT_FOUND);
    }
    return user;
  }
}
