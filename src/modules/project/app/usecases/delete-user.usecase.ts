import { Injectable } from '@nestjs/common';
import { DeleteUserService } from '../../../user/domain/services/delete-user.service';
import { SingleResponse } from '@/shared/dto/single-response';

@Injectable()
export class DeleteUserUsecase {
  private readonly deleteUserService: DeleteUserService;

  async execute(id: number) {
    await this.deleteUserService.execute(id);
    return SingleResponse.buildSuccess();
  }
}
