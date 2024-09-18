import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { FindAllUsersService } from '../domain/services/FindAllUsersService';
import { CreateUserDto } from '../client/dto/create-user.dto';
import { CreateUserService } from '../domain/services/CreateUserService';

@Controller()
export class UserController {
  @Inject()
  private readonly getAllUsersService: FindAllUsersService;

  @Inject()
  private readonly createUserService: CreateUserService;

  @Post('users')
  async create(@Body() { name }: CreateUserDto) {
    return this.createUserService.execute(name);
  }

  @Get('users')
  async findAll() {
    return this.getAllUsersService.execute();
  }
}
