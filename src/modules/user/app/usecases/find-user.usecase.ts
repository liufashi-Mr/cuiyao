import { Injectable } from '@nestjs/common';
import { FindUserService } from '../../domain/services/find-user.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class FindUserUsecase {
  private readonly findUserService: FindUserService;

  async execute(id: number) {
    const user = await this.findUserService.execute(id);
    return SingleResponse.of(user);
  }
}
