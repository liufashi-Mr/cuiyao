import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';
import { MultiResponse } from 'src/shared/dto/MultiResponse';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { ErrorCode } from 'src/shared/constants/error-code';

@Injectable()
export class FindAllUsersService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute() {
    const radom = Math.floor(Math.random() * 10);
    const res = await this.repository.findAll();
    if (radom > 5) {
      throw ExceptionFactory.bizException(ErrorCode.INVALID_PARAM);
    }
    return MultiResponse.of(res);
  }
}
