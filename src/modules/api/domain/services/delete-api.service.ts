import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../entities/api.entity';
import { API_REPOSITORY } from 'src/shared/constants/repository';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class DeleteApiService {
  @Inject(API_REPOSITORY)
  private readonly repository: typeof Api;

  async execute(id: number) {
    const api = await this.repository.findByPk(id);
    if (!api) {
      throw ExceptionFactory.bizException(ErrorCode.API_NOT_FOUND);
    }
    await api.destroy();
    return { message: 'API deleted successfully' };
  }
}
