import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from '../client/dto/create-user.dto';
import { CreateUserService } from '../domain/services/create-user-service';
import { FindAllUsersService } from '@modules/user/domain/services/find-all-users-service';

@Controller()
export class UserController {
  @Inject()
  private readonly findAllUsersService: FindAllUsersService;

  @Inject()
  private readonly createUserService: CreateUserService;

  @Post('users')
  async create(@Body() { name }: CreateUserDto) {
    return this.createUserService.execute(name);
  }

  @Get('users')
  async findAll() {
    return this.findAllUsersService.execute();
  }
}
