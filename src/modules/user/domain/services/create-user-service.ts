import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';

@Injectable()
export class CreateUserService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute(name: string) {
    const createdAt = new Date();
    return this.repository.create({
      name,
      createdAt,
      updatedAt: createdAt,
    });
  }
}
