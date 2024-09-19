import { Controller, Get, Inject } from '@nestjs/common';
import { FindAllUsersService } from '../user/domain/services/find-all-users-service';

@Controller('test')
export class TestController {
  @Inject()
  private readonly service: FindAllUsersService;

  @Get()
  async execute() {
    return this.service.execute();
  }
}
