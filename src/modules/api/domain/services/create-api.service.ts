import { Inject, Injectable } from '@nestjs/common';
import { Api } from '../entities/api.entity';
import { API_REPOSITORY } from 'src/shared/constants/repository';
import { CreateApiDto } from '../../app/dto/create-api.dto';

@Injectable()
export class CreateApiService {
  @Inject(API_REPOSITORY)
  private readonly repository: typeof Api;

  async execute(createApiDto: CreateApiDto) {
    return this.repository.create(createApiDto);
  }
}
