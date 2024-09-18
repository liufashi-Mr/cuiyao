import { Controller, Get, Inject } from '@nestjs/common';
import { FindAllUsersService } from '../user/domain/services/FindAllUsersService';

@Controller('test')
export class TestController {
  @Inject()
  private readonly service: FindAllUsersService;

  @Get()
  async execute() {
    return this.service.execute();
  }
}
