import { Injectable } from '@nestjs/common';
import { CreateUserService } from '../services/create-user.service';
import { SingleResponse } from '@/shared/dto/single-response';
import { CreateUserDto } from '../../client/dto/create-user.dto';

@Injectable()
export class CreateUserUsecase {
  private readonly createUserService: CreateUserService;

  async execute(createUserDto: CreateUserDto) {
    const user = await this.createUserService.execute(createUserDto);
    return SingleResponse.of(user);
  }
}
