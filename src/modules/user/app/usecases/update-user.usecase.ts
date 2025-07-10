import { Injectable } from '@nestjs/common';
import { UpdateUserService } from '../../domain/services/update-user.service';
import { SingleResponse } from '@/shared/dto/single-response';
import { UpdateUserDto } from '../../app/dto/update-user.dto';

@Injectable()
export class UpdateUserUsecase {
  private readonly updateUserService: UpdateUserService;

  async execute(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.updateUserService.execute(id, updateUserDto);
    return SingleResponse.of(user);
  }
}
